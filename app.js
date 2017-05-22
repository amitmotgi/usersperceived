var path = require('path');
var express = require('express')
var app = express()
var port = process.env.PORT || "3000";
var fs = require('fs');
var net = require('net');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/build/bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/bundle.js'));
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!')
});
