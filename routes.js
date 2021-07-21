const fs = require('fs')
const requestHandler = (req,res) => {
    const url = req.url
    const  method = req.method

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        const body = []; // creating body array to store chunks
        req.on('data', (chunk) => { //adding an event listener to listen to the incoming data or chunks
            console.log(chunk);
            body.push(chunk); // storing the incoming chunks into the body array
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString(); // adding the buffer to the body
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message); // writing the user input to the message.txt file
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title><head></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
}

module.exports = requestHandler()