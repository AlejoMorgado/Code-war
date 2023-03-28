// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.
function countPositivesSumNegatives(input) {
  let countOfPositives = 0;
  let sumOfNegatives = 0;
  for (let i = 0; i < input.length; i++) {
    if (input == null || input.length === 0) {
      return [];
    }
    else if (input[i] > 0) {
      countOfPositives++;
    }else if (input[i] < 0) {
      sumOfNegatives += input[i];
    }
  }
  return [countOfPositives, sumOfNegatives];
}
