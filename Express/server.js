/*
Express:
Fast web framework for Node.js
 */

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('How is it going guys')
})

app.listen(9090, () => {
  console.log('Express app listening on port http://localhost:9090')
})