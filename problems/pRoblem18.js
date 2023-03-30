// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
function wave(str){
  let upperLetter = [];
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ')  continue;
   let changeNumber = str.slice(0, i) + str[i].toUpperCase() + str.slice(i+1)
   upperLetter.push(changeNumber)
  }
  return upperLetter
}
console.log(wave("hello"));
