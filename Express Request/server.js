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

// URL - Query String

app.get('/search', (req, res) => {
    var tag = req.query.tag;
    res.send('Search tag: ' + tag);
});

// URL - Param String

app.get('/profile/:id', (req, res) => {
    var id = req.params.id;
    res.send('User id: ' + id);
});

// Header field

app.get('/destroy-yourself', (req, res) => {
    var adminPassword = req.header('adminPassword');
    if (adminPassword == '123') {
        res.send('Destroy yourself continues...');
    }else{
        res.send('Can not continue destroy yourself.');
    }
});

// Body

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
    var username = req.body.username;
    var password = req.body.password;

    res.send('Username: ' + username, 'Password: ' + password);
});

app.listen(9090, () => {
    console.log('Server running at http://localhost:9090/');
});