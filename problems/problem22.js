// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number
// https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript
function createPhoneNumber(numbers){
  numbers.splice(0, 0, "(")
  numbers.splice(4, 0, ')', ' ')
  numbers.splice(9, 0, '-')
  let phoneNumber = numbers.join('')
  return phoneNumber
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
