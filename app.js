const http = require('http');
const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        res.write('<html>')
        res.write('<head><title>first-node-project</title></head>')
        res.write('<body><form action="/message" method="post"><input type="text" name="message"><button type="submit">Send</button></body>')
        res.write('</html>')
        return res.end()
    } else {
        res.setHeader('Content-Type','text/html')
        res.write('<html>')
        res.write('<head><title>the fallback page</title></head>')
        res.write('<body><h1>Welcome to the first Node Server!!!!</h1></body>')
        res.write('</html>')
        res.end()
    }
})

server.listen(3000)