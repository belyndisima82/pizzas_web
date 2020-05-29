const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const compression = require('compression');

const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV || 'development';


app.use(compression());

app.use(express.raw());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'build')));

function errorHandler(err, res) {
	console.log(err);
	res.status(500);
	res.send(true);
}

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, function (req, res) {
  const date = new Date();
  console.log('Pizzas listening on port ' + PORT + " " + ENV + " " + date);
});