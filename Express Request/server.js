const express = require('express');
const app = express();

/*
Routing:
get, post, put, delete ...
 */

app.get('/', (req, res) => {
    res.send('Get request / endpoint');
});

app.get('/slav', (req, res) => {
    res.send('Get request /slav');
});

app.post('/', (req, res) => {
    res.send('Post request / endpoint');
});

app.put('/', (req, res) => {
    res.send('Put request / endpoint');
});

app.listen(9090, () => {
    console.log('Server running at http://localhost:9090/');
});