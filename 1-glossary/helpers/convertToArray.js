module.exports =  convertToArray = (data, cb) => {
  if (Array.isArray(data) === false) {
    data = [data];
  }
  cb(data);
}
