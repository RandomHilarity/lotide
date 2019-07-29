const tail = function(array) {
  let modifyArray = [...array];
  return modifyArray.splice(1);
};

module.exports = tail;