// Write a JavaScript function named sortObjects that takes an array of objects and a property name as input, and returns a new array of objects sorted based on the values of the specified property in ascending order.

function sortObjects(objects, property) {

  const sortedArray = objects.sort((a, b) => {
    if (a[property] < b[property]) {
      return -1;
    } else if (a[property] > b[property]) {
      return 1;
    }
    return 0;
  });
  return sortedArray;
}

const objects = [
  { name: 'Alice', age: 25 },
  { name: 'Zob', age: 30 },
  { name: 'Hharlie', age: 35 },
  { name: 'Jave', age: 20 }
];
const property = 'name';

console.log(sortObjects(objects, property));



