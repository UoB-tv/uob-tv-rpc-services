const express = require("express")
const http = require("http")
const bodyParser = require("body-parser")
const jsonwebtoken = require('jsonwebtoken')
const grpc = require('grpc')

const PORT = process.env.PORT || 8080
const GOOGLE_SIGN_IN_CLIENT_ID = process.env.GOOGLE_SIGN_IN_CLIENT_ID
const TOKEN_VALID_DURATION = 1000 * 60 * 60 * 24 
const SERVICE_DOMAINS = process.env.SERVICE_DOMAINS || ""

const messages = require("./generated-grpc/users_pb")
const services = require("./generated-grpc/users_grpc_pb")

let ALLOWED_GSUITE_DOMAINS = new Set([])
if (process.env.ALLOWED_GSUITE_DOMAINS) {
    ALLOWED_GSUITE_DOMAINS = new Set(process.env.ALLOWED_GSUITE_DOMAINS.split(","))
}

console.log("allowed domains:", ALLOWED_GSUITE_DOMAINS)
const API_AUTH_JWT_SECRET = process.env.API_AUTH_JWT_SECRET || "SECRET123456"

const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(GOOGLE_SIGN_IN_CLIENT_ID);

const USERS_HOST = "users-service" + (SERVICE_DOMAINS && ".") + SERVICE_DOMAINS
const USERS_PORT = 6000


const usersGrpcClient = new services
    .UserServiceClient(`${USERS_HOST}:${USERS_PORT}`, grpc.credentials.createInsecure())

class VerificationError extends Error {
    constructor(message) {
        super(message)
    }
}

async function createOrGetUser(usersServiceClient, userId, email) {
    const deadline = new Date().getMilliseconds() + 5000
    return new Promise((resolve, reject)=>{
        let request = new messages.CreateUserRequest()
        request.setEmail(email)
        request.setUserId(userId)
        usersServiceClient.createUserIfNotExists(request, (err, user) => {
            if(err) {
                console.error("err when executing GetByEmail", err)
                reject(err)
            } else {
                resolve(user)
            }
        })
    })
}

async function verify(token, clientId, allowedDomains) {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: clientId,  // Specify the CLIENT_ID of the app that accesses the backend
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
    });
    const payload = ticket.getPayload();
    console.log("email", payload.email)
    const userid = payload['sub'];
    // If request specified a G Suite domain:
    const domain = payload['hd'];
    console.log("domain", domain)
    if(allowedDomains && allowedDomains.size > 0) {
        if(!allowedDomains.has(domain))
            throw new VerificationError("Domain is not allowed:" + domain)
    }
    
    return {
        email: payload["email"],
        userId: payload["sub"],
        hd: payload["hd"]
    }
}

app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/api/v1/verify_signin", async(request, response) => {
    response.status(200)
        .send({
            serviceName: "user-authen",
            version: "v1",
        })
})

app.post("/api/v1/verify_signin", async (request, response) => {
    if(!request.body || !request.body.id_token) {
        response.status(400).send({
            message: "missing id_token in POST body",
            success: false,
        })
    }
    try {
        console.log("verifying id_token")
        const id_token = request.body.id_token
        let result = null
        try {
            result = await verify(id_token, GOOGLE_SIGN_IN_CLIENT_ID, ALLOWED_GSUITE_DOMAINS)
        } catch(err) {
            console.log("probably token is invalid")
            response.status(400).send({
                message: "token is invalid or have expired.",
                success: false,
            })
            return 
        }
        console.log("id_token verified")
        time_millis = new Date().getTime()
        console.log("generate signed jwt token")
        const token = jsonwebtoken.sign(
            {
                "iss": "authen.uob-tv.co.uk",
                "exp": time_millis + TOKEN_VALID_DURATION,
                "sub": result.email,
                "aud": "api",
                "iat": time_millis,
            },
            API_AUTH_JWT_SECRET,
        )
        console.log("create or get user with email.")
        await createOrGetUser(usersGrpcClient, result.userId, result.email)

        response.status(200).send({
            message: "user verified",
            success: true,
            accessToken: token,
        })

    } catch (err) {
        console.error(err)
        response.status(400).send({
            message: "error processing token: " + err.message,
            success: false
        })
    }
})

app.listen(PORT, () => {
    console.log("listening on", PORT)
})


