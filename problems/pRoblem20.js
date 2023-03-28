// Write a function that determines whether the passed in sequences are similar. Similar means they contain the same elements, and the same number of occurrences of elements.
// arraysSimilar(arr1, arr2); // Should equal true
// arraysSimilar(arr2, arr3); // Should equal false
// arraysSimilar(arr3, arr4); // Should equal false
// https://www.codewars.com/kata/51e704f2d8dbace389000279/train/javascript
function arraysSimilar(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  for (const element of arr1) {
    if (!arr2.includes(element)) {
      return false;
    }
  }
  return true;
}
 
console.log(arraysSimilar([1, 2, 2, 3, 4], [2, 1, 3, 4, 3]));