const fs = require('fs');

const express = require('express');
const proxy = require('http-proxy-middleware');

const app = express();

// serve up dev html content.
app.use('/dev.html', (req, res) => {
  res.send(fs.readFileSync('dev.html', 'utf8'));
  res.end();
});

// proxy everything else to metro server, avoids fiddling with cors.
app.use('/', proxy({
  target: 'http://localhost:8082/',
  changeOrigin: true,
}))

app.listen(3000, () => {
  console.log('open - http://localhost:3000/dev.html');
});