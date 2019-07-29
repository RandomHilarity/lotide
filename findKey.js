// finds and returns a key in an object based on the value of the key, stops when it finds the first

const findKey = function(object, callback) {
  for (let names in object) {
    if (callback(object[names]) === true) {
      return names;
    }
  }
};

module.exports = findKey;
  