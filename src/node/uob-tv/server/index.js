const express = require('express')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    server = express()
    server.get('/', (req, res) => {
        return app.render(req, res, '/', req.query)
    })

    server.get('/my_channel', (req, res) => {
        return app.render(req, res, '/my_channel', req.query)
    })

    server.get('/channels/:channel_id', (req, res) => {
        return app.render(req, res, '/channels', req.query)
    })

    server.get('/watch_stream/:stream_id', (req, res) => {
        return app.render(req, res, '/watch_stream', req.query)
    })

    server.get('/watch_video/:video_id', (req, res) => {
        return app.render(req, res, '/watch_video', req.query)
    })

    server.get('/browse', (req, res) => {
        return app.render(req, res, '/browse', req.query)
    })

    server.get('/live', (req, res) => {
        return app.render(req, res, '/live', req.query)
    })
    server.listen(80, err => {
        if (err) throw err
        console.log('> Ready on http://localhost:80')
    })
})