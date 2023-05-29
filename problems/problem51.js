// Write a JavaScript function named transformObject that takes an object as input and returns a new object with transformed key-value pairs. The transformation is performed based on a provided mapping object that specifies the new key names for the original keys.

function transformObject(inputObject, mapping) {
  const newObj = {};

  Object.keys(inputObject).forEach((key) => {
    const mappedKey = mapping[key] || key;
    newObj[mappedKey] = inputObject[key];
  });

  return newObj;
}

const inputObject = { name: 'Alice', age: 25, city: 'New York' };
const mapping = { name: 'fullName', city: 'location' };
console.log(transformObject(inputObject, mapping));

