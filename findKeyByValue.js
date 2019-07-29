// Finds and returns key based on key value.

const findKeyByValue = function(allValues, searchValue) {
  for (let genre in allValues) {
    if (allValues[genre] === searchValue) {
      return genre;
    }
  }
};

module.exports = findKeyByValue;