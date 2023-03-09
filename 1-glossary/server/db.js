const mongoose = require("mongoose");
const path = require("path");

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them

mongoose.connect('mongodb://localhost/glossary')
.catch(err => console.log(err));

const glossarySchema = new mongoose.Schema({
  id:
    {type: Number,
    unique: true},
  name: String,
  def: String
})

const glossaryWord = mongoose.model('glossaryWord', glossarySchema);

// save a new word to the database
const save = () => {

}

// delete a word from the database
const delete = () => {

}

module.exports.save = save;
module.exports.delete = delete;