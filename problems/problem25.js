// Create a function that takes in an array of numbers and returns the sum of its cubes.
//https://edabit.com/challenge/XdAR3KohR5w7rjrFg
function sumOfCubes(nums) {
  let totalSum = 0;
  for (let i = 0; i < nums.length; i++) {
   totalSum +=  Math.pow(nums[i], 3)
  }
  return totalSum
}
console.log(sumOfCubes([1, 5, 9]));


