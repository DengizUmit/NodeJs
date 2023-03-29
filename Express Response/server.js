const express = require('express');
const app = express();

// static files
app.use(express.static('static'));

/*
HTTP Response Status Codes:
- 1xx - Informational
- 2xx - Successful
- 3xx - Redirection
- 4xx - Client Error
- 5xx - Server Error
 */

app.get('/', (req, res) => {
    res.send('Slav bro');
});

app.get('/ok', (req, res) => {
    res.status(200).send('We want 200.');
});

app.get('/not-found', (req, res) => {
    res.setHeader('Name', 'Omit')
    res.status(404).send('We want 404.');
});

app.get('/unauthorized', (req, res) => {
    res.status(401).send('We want 401.');
});

app.get('/return-json', (req, res) => {
    res.json({
        niceName: 'Mr. Robot',
        name: 'Omit',
        surname: 'Loth-bro'
    });
});

app.get('/return-file', (req, res) => {
    res.sendFile(process.cwd +'/slav.txt');
});

app.listen(9090, () => {
    console.log('Server running at http://localhost:9090/');
});