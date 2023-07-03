const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/bmicalculator', (req, res) => {
  res.sendFile(__dirname + '/Calculator/bmiCalculator.html');
});

app.post('/bmicalculator', (req, res) => {
  const weight = parseFloat(req.body.weight);
  const height = parseFloat(req.body.height);

  const bmi = weight / Math.pow(height / 100, 2);

  res.send(`Your BMI is ${bmi.toFixed(2)}`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});