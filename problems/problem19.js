// Your task, is to create N×N multiplication table, of size provided in parameter.
// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/javascript
multiplicationTable = function(size) {
  let finalArray = [];
  for (let i = 1; i <= size; i++) {
    let arrays = [];
    for (let j = 1; j <= size; j++) {
      arrays.push(i * j)
    }
    finalArray.push(arrays)
  }
  return finalArray
}
console.log(multiplicationTable(5));