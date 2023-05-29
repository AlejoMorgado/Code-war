// Write a JavaScript function named filterObjects that takes an array of objects and a key-value pair as input, and returns a new array containing only the objects that have a matching key-value pair.
const filterObjects = (users, keyValue) => {

  const filteredArray = users.filter(user => {
    return Object.keys(keyValue).every(key => user.hasOwnProperty(key) && user[key] === keyValue[key]);
  });
  return filteredArray;
};

const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
  { name: 'Alice', age: 40 }
];
const keyValue = { name: 'Alice' };

console.log(filterObjects(users, keyValue));
