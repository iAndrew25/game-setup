const express = require('express'),
	path = require('path');

const app = express(),
	port = 8000;

let players = [];

app.use(express.static(path.join(__dirname + '/../')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/../index.html')));


app.listen(port, () => console.log(`Listening on port ${port}`));