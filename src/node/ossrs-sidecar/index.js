const express = require("express")

const bodyParser = require("body-parser")
const app = express()


const grpc = require("grpc")
const messages = require("./generated-grpc/hls_cluster_api_pb")
const services = require("./generated-grpc/hls_cluster_api_grpc_pb")


const GRPC_PORT = process.env.GRPC_PORT || 6000
const PORT = process.env.PORT || 30150
const SERVICE_DOMAINS = process.env.SERVICE_DOMAINS || ""
const ALLOWED_APP_URL = process.env.ALLOWED_APP_URL || "live/stream"
const RTMP_SERVICE = process.env.RTMP_SERVICE || "ossrs-ingestion-service"

const HLS_CLUSTER_HOST = "hls-cluster-service" + (SERVICE_DOMAINS && ".") + SERVICE_DOMAINS
const HLS_PORT = GRPC_PORT


const hlsClusterGrpcClient = new services
    .HlsClusterClient(`${HLS_CLUSTER_HOST}:${HLS_PORT}`, grpc.credentials.createInsecure())


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.status(200).send({
        serviceName: "ossrs-sidecar",
        version: "0.2",
    })
})

app.post("/api/v1/callbacks/on_connect", (req, res) => {
    console.log(req.body)
    if(!req.body) {
        console.warn("missing POST body")
        res.status(400).send("-1")
        return
    }
    const appURL = req.body.app
    console.log("received client on_connect with appURL", appURL)
    if(appURL === ALLOWED_APP_URL) {
        res.status(200).send("0")
    } else {
        res.status(400).send("-1")
    }
})

async function canPublish(client, streamKey) {
    let param = new messages.StreamKey()
    param.setValue(streamKey)
    return new Promise((resolve, reject) => {
        client.canPublish(param, (err, result) => {
            if(err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}

async function provisionTransmuxer(client, streamKey, rtmpServiceName) {
    let param = new messages.TransmuxerParameters()
    param.setStreamkey(streamKey)
    param.setRtmpservice(rtmpServiceName)
    return new Promise((resolve, reject) => {
        client.provisionTranmuxer(param, (err, result) => {
            if(err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}

async function unprovisionTransmuxer(client, streamKey) {
    let param = new messages.StreamKey()
    param.setValue(streamKey)

    return new Promise((resolve, reject) => {
        client.unprovisionTranmuxer(param, (err, result) => {
            if(err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}

app.post("/api/v1/callbacks/on_publish", async (req, res) => {
    console.log(req.body)
    if(!req.body) {
        console.warn("missing POST body")
        res.status(400).send("-1")
        return
    }
    const {app, stream, client_id} = req.body
    if(!app || !stream || !client_id) {
        res.status(400).send("-1")
        return 
    }
    console.log("received on publish", app, stream, client_id)
    if(app !== ALLOWED_APP_URL) {
        res.status(400)
            .send("only allowed app path: ", ALLOWED_APP_URL)
        return
    }
    try {
        let result = await canPublish(hlsClusterGrpcClient, stream)
        console.log("can publish: ", result)
        if(!result.value) {
            res.status(400).send("-1")
            return
        }
        console.log("provision transmuxer", stream, RTMP_SERVICE)
        result = await provisionTransmuxer(hlsClusterGrpcClient, stream, RTMP_SERVICE)
        if(!result.success) {
            console.warn("failed to provision transmuxer", result.error)
            res.status(400).send("-1")
            return
        }
        res.status(200).send("0")
    } catch(err) {
        console.error("error calling hls cluster service", err)
        res.status(500).send("-1")
    }
})

app.post("/api/v1/callbacks/on_unpublish", async (req, res) => {
    console.log(req.body)
    if(!req.body) {
        console.warn("missing POST body")
        res.status(400).send("-1")
    }
    const {app, stream } = req.body
    if(!app || !stream) {
        res.status(400).send("-1")
        return
    }
    try {
        console.log("unprovision transmuxer for stream: ", stream)
        const result = await unprovisionTransmuxer(hlsClusterGrpcClient, stream)
        res.status(200).send("0")
    } catch(err) {
        console.error(err)
    }
})

app.post("/api/v1/callbacks/on_close", (req, res) => {
    res.status(200).send("0")
})

app.listen(PORT, () => {
    console.log("ossrs-sidecar listening on ", PORT)
})

/**
 * 
 * 
 * @app.route("/", methods=["GET"])
def index():
    return jsonify({
        "version": VERSION,
        "serviceName": SERVICE,
    })

@app.route("/api/v1/callbacks/on_connect", methods=["POST"])
def on_connect():
    global request
    return "0"

@app.route("/api/v1/callbacks/on_publish", methods=["POST"])
def on_publish():
    global request
    return "0"

@app.route("/api/v1/callbacks/on_unpublish", methods=["POST"])
def on_unpublish():
    global request
    return "0"

@app.route("/api/v1/callbacks/on_close", methods=["POST"])
def on_close():
    global request
    return "0"

 */