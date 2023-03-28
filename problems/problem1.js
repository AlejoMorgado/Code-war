// Given a non-empty array of integers, return the result of multiplying the values together in order.
// https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript
function grow(x){
  let total = 1;
  for (let index = 0; index < x.length; index++) {
   total *= x[index]
  }
  return total
}
console.log(grow([1, 2, 3, 4, 5]));