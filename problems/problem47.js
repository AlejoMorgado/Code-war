// Write a JavaScript function named removeDuplicates that takes an array of elements as input and returns a new array with all duplicate elements removed.

function removeDuplicates(array) {
  const removedDuplicates = array.filter((element, index) => {
    return array.indexOf(element) === index;
  });

  return removedDuplicates;
}

const array = [1, 2, 3, 3, 4, 4, 5];
console.log(removeDuplicates(array)); 

