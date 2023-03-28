// Default working

const http = require("http");

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hallo guys\n');
  }).listen(9090, () => {
    console.log('Server running at http://localhost:9090/');
  });