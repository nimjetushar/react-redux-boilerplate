let fs = require("fs");
let fileName = "./server/assets/input.json";

fs.open(fileName, "r+", function(err, fd) {
  if (err) {
    return console.error(err);
  }
  console.log("File opened successfully!");
});

module.exports.read = function(callback) {
  fs.readFile(fileName, function(err, data) {
    if (err) {
      return console.error(err);
    }
    callback && callback(data);
  });
};

module.exports.post = function(obj, callback) {
  fs.writeFile(fileName, JSON.stringify(obj), function(err, data) {
    if (err) {
      return console.log(err);
    }
    callback && callback(data);
  });
};
