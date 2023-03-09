require("dotenv").config();
const express = require("express");
const path = require("path");
const { save, remove } = require('./db.js');
const convertToArray = require('../helpers/convertToArray.js');

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use('/glossary', express.json());


app.get('/glossary', (req, res) => {
  res.status(200).send('Hello world');
});

app.post('/glossary', (req, res) => {
  convertToArray(req.body, (data) => {
    // save to db
    save(data);
    res.status(201).send('thanks for posting');
  })
});

app.put('/glossary', (req, res) => {
  console.log('app.put touched');
  res.status(200).send('I put it in the right place, I hope...');
})

app.delete('/glossary', (req, res) => {
  console.log('app.delete touched');
  res.status(200).send('target eliminated');
})


app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
