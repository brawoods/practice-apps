require("dotenv").config();
const express = require("express");
const path = require("path");
const glossary = require('./db.js');
const convertToArray = require('../helpers/convertToArray.js');

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use('/glossary', express.json());


app.get('/glossary', (req, res) => {
  if (req.body.length > 0) {
    console.log('req body: ', req.body);
  } else {
    glossary.getAll((data) => {
      res.status(200).send(data);
    })
  }
});

app.post('/glossary', (req, res) => {
  convertToArray(req.body, (data) => {
    // save to db
    glossary.save(data);
    res.status(201).send('thanks for posting');
  })
});

app.put('/glossary', (req, res) => {
  console.log('app.put touched');
  res.status(200).send('I put it in the right place, I hope...');
})

app.delete('/glossary', (req, res) => {
  console.log('app.delete touched');
  glossary.remove(req.body, (deleteCount) => {
    res.status(200).send(deleteCount);
  });
})


app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
