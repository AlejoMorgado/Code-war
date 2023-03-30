// Complete the square sum function so that it squares each number passed into it and then sums the results together
function squareSum(numbers){
  let totalSum = 0;
numbers.forEach((_, index) => {
  let squareNum = Math.pow(numbers[index], 2)
  totalSum += squareNum
});
 return totalSum
}
console.log(squareSum([0, 3, 4, 5]));