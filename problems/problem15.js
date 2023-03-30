// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
// function moveZeros(arr) {
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index] === 0) {
//      arr.push(arr.splice(arr.indexOf(arr[index]), 1)[0]);
//     }
//   }
//   return arr
// }
// console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));

function moveZeros(arr) {
  const zeroArr = arr.map((x)=>{
    if (x === 0) {
      
    }
  })
  return arr
}
console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));