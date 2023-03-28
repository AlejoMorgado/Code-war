//Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .
function addLength(str) {
  let arr  = [];
  let words = str.split(' ');
  for (let index = 0; index < words.length; index++) {
    arr.push(words[index] + " " + words[index].length)
  }
  return arr
}
console.log(addLength('hola amigos como estan'));