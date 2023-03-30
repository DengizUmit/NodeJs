const express = require('express');
const app = express();

const multer = require('multer');
const uploadMiddleware = multer ({
    limits: {
        fileSize: 1024 * 1024 * 20
    },
    fileFilter: (req, file, cb) => {
        cb(undefined, true)
    },
    storage: multer.diskStorage({
        filename: (req, file, cb) => {
            cb(null, file.originalname)
        },
        destination: (req, file, cb) => {
            cb(null, 'uploads/')
        }
    })
});


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.post('/upload', uploadMiddleware.single('avatar'), (req, res) => {
    if(!req.file)
        return res.json({
            success: false,
            message: 'File not uploaded!'
        })
    else
        return res.json({
            success: true,
            message: 'File uploaded.',
            file: req.file
        })
});

app.get('/uploads/:filename', (req, res) => {
    var filename = req.params.filename;
    res.sendFile(__dirname + '/uploads/' + filename)
});


app.listen(9090, () => {
    console.log('Server is running on port http://localhost:9090');
});