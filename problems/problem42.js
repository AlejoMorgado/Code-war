// From the array of numbers, choose even double even numbers and compute the sum using Array's filter, map and reduce methods.
let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredNumbers = (arr) => {
  const isEven = arr.filter(number => number % 2 === 0)
  const doubleEvens = isEven.map(even => even * even)
  const reduceNumbers = doubleEvens.reduce((acc, cur) => acc + cur, 0);
  return reduceNumbers;
}

console.log(filteredNumbers(x));