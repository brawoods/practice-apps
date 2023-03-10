require("dotenv").config();
const mongoose = require("mongoose");
const path = require("path");

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them

// TODO change to path.join with dirname
mongoose.connect('mongodb://localhost/glossary')
.catch(err => console.log(err));

const glossarySchema = new mongoose.Schema({
  name: {type: String,
    unique: true},
  def: String
})

const glossaryWord = mongoose.model('glossaryWord', glossarySchema);

// save a new word to the database
const getOne = (wordName) => {
  return glossaryWord.findOne(wordName)
  .then((res) => {
    console.log('res', res);
  })
  .catch((err) => {
    console.log('err', err);
  });
}

const getAll = (cb) => {
  glossaryWord.find()
  .then((data) => {
    cb(data);
  })
  .catch((err) => {
    console.log(err);
  })
}

const save = (words) => {
  glossaryWord.create(words);
}

// delete a word from the database
const remove = () => {

}

module.exports.getOne = getOne;
module.exports.getAll = getAll;
module.exports.save = save;
module.exports.remove = remove;