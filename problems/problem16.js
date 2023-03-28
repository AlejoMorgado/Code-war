function count(string) {
  let charCount = {};
    if (string === "") {
      return {}
    }
  for (let index = 0; index < string.length; index++) {
    if (charCount[string[index]]) {
      charCount[string[index]]++;
    } else {
      charCount[string[index]] = 1;
    }
  }
  return charCount
}
console.log(count('holo'));

// In this code, we initialize an empty object charCount to store the character counts. Then we loop through each character in the input string str. For each character, we check if it already exists in the charCount object. If it does, we increment its count by 1. If it doesn't, we add it to the object with a count of 1.
// Finally, we return the charCount object with the character counts. If the input string is empty, the function will return an empty object literal, {}.