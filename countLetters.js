const countLetters = function(stringToCount) {
  let lettersCounted = {};
  for (let letter of stringToCount) {
    letter !== " " && typeof lettersCounted[letter] !== "number" ? lettersCounted[letter] = 1 : letter !== " " ? lettersCounted[letter] = ++lettersCounted[letter] : "";
  }
  return lettersCounted;
};

module.exports = countLetters;