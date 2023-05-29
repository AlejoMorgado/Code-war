// Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.

const formatNumber = (arr) => {
  const formattedArr = [];
  for (let i = 0; i < arr.length; i++) {
    formattedArr.push(arr[i]);

    if (arr[i] % 2 === 0 && i !== arr.length - 1) {
      formattedArr.push("-");
    }
  }
  return formattedArr.join("");
};
const x = [1, 2, 3, 4, 5, 6, 7];
console.log(formatNumber(x));
