let stock = ["Orange", "Apple", "Watermelon", "Banana"];
function checkFruit(n) {
  const wordLenght = stock.some((fruit => fruit.length === n))
  return wordLenght
}
console.log(checkFruit(6));