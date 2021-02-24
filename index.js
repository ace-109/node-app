var express = require('express');

var app = express();

app.get('/', function (req, res) {
//Respond with "Detected" for request that hits root
  res.send('update to the app');
});

console.log('Visit http://localhost:5000/')
console.log('Press Ctrl+C to shut down...')

app.listen(process.env.PORT || 5000);

module.exports = app;
