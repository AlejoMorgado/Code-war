// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
function invert(array) {
  return array.map(element => element * -1)
};
console.log(invert([1, 2, 3, 4, -5]));

function invert(array) {
  return array.map(element => -element)
};
console.log(invert([1, 2, 3, 4, 5]));

