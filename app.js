const http = require('http');
const express = require('express')
const app = express();

app.use((req, res, next) => {
    console.log('In the first middleware')
    next()
});

app.use((req, res, next) => {
    console.log('In the second Middle ware')
    next()
})

app.use((req, res, next) => {
    res.send('Hello there and welcome to Express Javascript')
})

const server = http.createServer(app)

server.listen(5000)
