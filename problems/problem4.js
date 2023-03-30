// Complete the square sum function so that it squares each number passed into it and then sums the results together
function squareSum(numbers) {
  let totalSum = 0;
  for (let a = 0; a < numbers.length; a++) {
    let squareNum = Math.pow(numbers[a], 2);
    totalSum += squareNum;
  }
  return totalSum
}
console.log(squareSum([0, 3, 4, 5]));

