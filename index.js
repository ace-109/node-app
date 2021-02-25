var express = require('express');

var app = express();

app.get('/', function (req, res) {
//Respond with "Demo" for request that hits root
  res.send('update for demo');
});

console.log('Visit http://localhost:5000/')
console.log('Press Ctrl+C to shut down...')

app.listen(process.env.PORT || 5000);

module.exports = app;
