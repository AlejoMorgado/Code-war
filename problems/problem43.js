// Consider the following array:
// let nums = [11, 22, 33, 46, 75, 86, 97, 98];
// Use filter then map functions to filter even numbers then square them. Assign the result to a variable named squaredEvenNums and display it. The output should be:
// squaredEvenNums: [484, 2116, 7396, 9604]
// Use the reduce function to calculate the sum of nums array. The output should be:
// Sum of array elements: 468


let nums = [11, 22, 33, 46, 75, 86, 97, 98];

const operationNumbers = (arr) => {
  const filteredNumbers = arr.filter((number) =>  number % 2 === 0);
  const squaredEvenNums = filteredNumbers.map((even) => even * even);
  console.log(`Here are the squared even numbers: ${squaredEvenNums}`);
}

console.log(operationNumbers(nums));