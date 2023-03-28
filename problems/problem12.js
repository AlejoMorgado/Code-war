// Write a program that outputs the top n elements from a list.
function largest(n, array) {
  if (n === 0) {
    return []
  }
  let array2 =  array.sort((a, b) => a - b);
  const topN = array2.slice(-n); 
  return topN;
}
console.log(largest(3, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));;