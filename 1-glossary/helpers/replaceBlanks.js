module.exports = replaceBlanks = (word, update, cb) => {
  console.log('word', word);
  console.log('update', update);

  if (update.name === undefined) {
    console.log('name undefined');
    update.name = word.name;
  }
  if (update.def === undefined) {
    console.log('def undefined');
    update.def = word.def;
  }
  cb(word, update);
}