// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.
// Don't change the order of the elements that are left.
function removeSmallest(arr) {
  if (arr.length === 0) {
    return [];
  }
  let min = arr[0];
  let minIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      minIndex = i;
    }
  }

  
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== minIndex) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(removeSmallest([1, 3, 2, 1, 4]));