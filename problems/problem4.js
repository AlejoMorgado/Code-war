function squareSum(numbers){
  let totalSum = 0;
 for (let a = 0; a < numbers.length; a++) {
  let squareNum = Math.pow(numbers[a], 2);
  totalSum += squareNum;
 }
 return totalSum
}
console.log(squareSum([0, 3, 4, 5]));