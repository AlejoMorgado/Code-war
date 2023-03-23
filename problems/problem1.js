function grow(x){
  let total = 1;
  for (let index = 0; index < x.length; index++) {
   total *= x[index]
  }
  return total
}
console.log(grow([1, 2, 3, 4, 5]));