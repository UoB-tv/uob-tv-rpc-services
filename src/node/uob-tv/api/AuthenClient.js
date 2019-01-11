import axios from 'axios'

export class AuthenClient {
    constructor(baseURL) {
        this.axios = axios.create({
            baseURL: baseURL
        })
    }

    verifySignIn(idToken) {
        const url = "verify_signin"
        return this.axios.post(url, {
            "id_token": idToken
        })
        .then(response => {
            return response.data
        })
        .catch(error => {
            console.log(error)
        })
    }
}