const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers)
    
    res.end('hello from my first server.')    
}
)

server.listen(5000);
