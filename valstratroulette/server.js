const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.get('/', async(req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/:file', async(req, res) => {
    res.sendFile(path.join(__dirname, 'public/'+req.params.file))
});

app.listen(8080, () => {
    console.log("Server started boiiiiiiiiiiiiii!")
});