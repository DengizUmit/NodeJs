
// const http = require("http");

// http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Hallo guys\n');
//   }).listen(9090, () => {
//     console.log('Server running at http://localhost:9090/');
//   });


const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('How is it going guys')
})

app.listen(9090, () => {
  console.log('Express app listening on port http://localhost:9090')
})