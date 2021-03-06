const express = require('express');
const path = require('path');
const app = express();
const compression = require('compression');
const publicPath = path.join(__dirname, '..', 'public');


app.use(compression());

app.use(express.raw());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(publicPath));


var allowCrossDomain = function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type, authorization');
	next();
};

app.use(allowCrossDomain);

app.get('*', function(req, res) {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(PORT, function (req, res) {
    const date = new Date();
    console.log('Pizza ' + PORT + " " + ENV + " " + date);
  });