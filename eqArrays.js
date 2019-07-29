let eqArrays = function(firstArray, secondArray) {
  let result = true;
  for (let i = 0; i < firstArray.length; i++) {
    result && firstArray[i] === secondArray[i] ? result = true : result = false;
  }
  return result;
};

module.exports = eqArrays;