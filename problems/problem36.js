// * Task description: Write a method that splits an array into parts of determined size 
const splitedArray = [];
const chunk = (array, size) => {
  for (let index = 0; index < array.length; index += size) {
    const divideArray = array.slice(index, index + size);
    splitedArray.push(divideArray);
  }
};

const data = [1, 2, 3, 4, 5, 6, 7];
chunk(data, 3);
console.log(splitedArray);
