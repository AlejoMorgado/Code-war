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
