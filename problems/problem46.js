// Write a JavaScript function named findMissingNumbers that takes an array of consecutive numbers as input, except for one missing number, and returns an array containing the missing numbers in ascending order.

const findMissingNumbers = (arr) => {
  const missingNumbers = []
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  for (let i = min; i <= max; i++) {
    if (!arr.includes(i)) {
      missingNumbers.push(i);
    }
  }
  return missingNumbers;
}

const x = [1, 2, 4, 6, 7, 9];
console.log(findMissingNumbers(x)); 