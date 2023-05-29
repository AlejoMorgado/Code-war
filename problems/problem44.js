// We want to extend the array class so that it provides a contains_all? method. This method will always assume that an array is passed in and will return true if all values in the passed in array are present within the current array.

function sortByFrequency(arr) {
  const frequencyMap = {};
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (frequencyMap[element]) {
      frequencyMap[element]++;
    } else {
      frequencyMap[element] = 1;
    }
  }
  arr.sort(function(a, b) {
    const frequencyDiff = frequencyMap[b] - frequencyMap[a];
    if (frequencyDiff !== 0) {
      return frequencyDiff; 
    } else {
      return a - b; 
    }
  });
  return arr;
}

const array = [4, 4, 2, 2, 8, 3, 1, 1, 1, 8];
console.log(sortByFrequency(array)); 

