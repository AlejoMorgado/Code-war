// Write a function that takes a string and returns an object representing the character count for each letter. Use .reduce to build this object.
const characterCount = (str) => {
  return [...str].reduce((countObj, char) => {
    countObj[char] = (countObj[char] || 0) + 1;
    return countObj;
  }, {});
};
console.log(characterCount("dweijkfg erkj fhrkjfhsajkfhsklfa"));