// Write a function containsElement(arr, element) that takes an array arr and an element element as arguments, and returns true if the element is present in the array, and false otherwise.
function containsElement(arr, element) {
  return arr.indexOf(element) !== -1
}
console.log(containsElement(["a", "b", "c"], "b"));