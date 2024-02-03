const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.get('/', async(req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/:file', async(req, res) => {
    res.sendFile(path.join(__dirname, req.params.file))
});

app.listen(8080, () => {
    console.log("Server started boiiiiiiiiiiiiii!")
});