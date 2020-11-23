var express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const env = dotenv.config();
var app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.post('/post', function(req, res) {
  const body = req.body;
  const str = `INSERT INTO foods (id,name,price,calorie) VALUES ("${uuidv4()}", "${body.name}", ${body.price}, ${body.calorie})`;
  connection.query(str, function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


