const http = require('http')

const server = http.createServer((req, res) => {
    const url = req.url

    if (url === '/'){
        res.write('<html>')
        res.write('<head><title>first node server</title></head>')
        res.write('<body><form action="/message" method="post"><input type="text" name="message"><button type="submit">Submit Data</button></form></body>')
        res.write('</html>')
        return res.end()
    } else {
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title>the alternative page</title></head>')
        res.write('<body><h1>FIRST NODE SERVER !!!!!!!!!!</h1></body>')
        res.write('</html>')
        res.end()
    }
})

server.listen(3000)