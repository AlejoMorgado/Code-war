function numberOfPairs(gloves){
let result = 0;
for (let i = 0; i < gloves.length; i++) {
  for (let j = i+1; j < gloves.length; j++) {
    if (gloves[j] === gloves[i]) {
      result += 1
    }
  }
}
return result
}
console.log(numberOfPairs(['red', 'red','black', 'blue', 'blue', 'black']));

// Given an array describing the color of each glove, return the number
// of pairs you can constitute, assuming that only gloves
// of the same color can form pairs.