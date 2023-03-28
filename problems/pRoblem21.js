// In this kata, you will sort elements in an array by decreasing frequency of elements. If two elements have the same frequency, sort them by increasing value.
//https://www.codewars.com/kata/5a8d2bf60025e9163c0000bc/train/javascript
function solve(arr){
  let sortedArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        sortedArr.push(arr[j])
      }
    }
  }
  return sortedArr.sort()
}
console.log(solve([2,3,5,3,7,9,5,3,7]));