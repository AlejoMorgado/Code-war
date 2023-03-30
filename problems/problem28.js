// Create a function that takes in the array as an input parameter and uses the Array.prototype.every() method to check if every element in the array is greater than 0.
function greaterNumbers(arr) {
  return arr.every((nums) => nums > 0)
  }
console.log(greaterNumbers([2, 3, 4, 5, 6, 7, 8, 9]));