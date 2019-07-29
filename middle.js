let middle = function(inputArray) {
  let i = inputArray.length;
  if ([0,1,2].indexOf(i) > -1) {
    return [];
  } else if (i % 2 !== 0) {
    return [inputArray[inputArray.length / 2 - 0.5]];
  } else {
    return [inputArray[inputArray.length / 2 - 1], inputArray[inputArray.length / 2]];
  }
};

module.exports = middle;