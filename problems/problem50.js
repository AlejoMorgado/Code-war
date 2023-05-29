// Write a JavaScript function named groupObjectsByProperty that takes an array of objects and a property name as input, and returns a new object where the objects are grouped based on the unique values of the specified property.

const groupObjectsByProperty = (objects, property) => {
  const groupedObjects = {}

  objects.forEach(element => {
    const keyValue = element[property];
    if (Object.keys(groupedObjects) === keyValue) {
      groupedObjects[keyValue].push(element)
    }else {
      groupedObjects[keyValue] = [element]
    }
  });
  return groupedObjects;
}

const objects = [
  { name: 'Alice', city: 'New York' },
  { name: 'Bob', city: 'Los Angeles' },
  { name: 'Charlie', city: 'New York' },
  { name: 'Dave', city: 'Los Angeles' }
];

const property = 'city';
console.log(groupObjectsByProperty(objects, property));







