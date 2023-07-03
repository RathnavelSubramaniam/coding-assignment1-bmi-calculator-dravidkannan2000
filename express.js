const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
const port = 3500;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);
  var bmi = weight / (height ** 2);
  res.send("<h1>Your BMI IS </h1> "+ bmi);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});