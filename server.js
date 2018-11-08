const express = require('express');
const parser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './public')));

app.listen(PORT, (err) => {
  if (err) {
    console.error('Error connecting server to PORT: ', err);
  }

  console.log('Successfully connected server to PORT: ', PORT);
});