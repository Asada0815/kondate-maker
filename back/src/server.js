var express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const env = dotenv.config();
var app = express();

app.use(cors());

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : env.parsed.HOST,
  user     : env.parsed.USER,
  password : env.parsed.PASSWORD,
  database : env.parsed.DB
});

app.get('/get', function (req, res) {
  connection.query('select * from foods', function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});