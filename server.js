const http = require('http');
const hostname = '0.0.0.0';
const port = process.env.PORT || 5000;
const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hi there!\n');
    }
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
