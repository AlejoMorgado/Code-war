//Filter all the numbers higher than zero
function invert(array) {
  return array.filter((nums) => nums < 0)
}
console.log(invert([1,2,3,4,-5]));