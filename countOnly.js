// allItems: an array of strings to look through
// itemsToCount: an object specifying what to count

const countOnly = function(allItems, itemsToCount) {
  let resultsObject = {};
  for (let name in itemsToCount) {
    let trueFalse = itemsToCount[name];
    if (trueFalse) {
      let counter = 0;
      for (let i = 0; i < allItems.length; i++) {
        if (name === allItems[i]) {
          counter ++;
          resultsObject[name] = counter;
        }
      }
    }
  }
  Object.entries(resultsObject).length === 0 ? resultsObject = undefined : "";
  return resultsObject;
};

module.exports = countOnly;