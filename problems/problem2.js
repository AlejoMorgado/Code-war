// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.
// Return as a number.
// https://www.codewars.com/kata/57eaec5608fed543d6000021/train/javascript
function divCon(x){
let string = 0;
let nonString = 0;

for (let index = 0; index < x.length; index++) {
  if (typeof x[index] === "number") {
    nonString += x[index];
  }
  else if(typeof x[index] === "string"){
    string += parseInt(x[index]);
  }
} 
return nonString - string
}
console.log(divCon([9, 3, '7', '3']));
