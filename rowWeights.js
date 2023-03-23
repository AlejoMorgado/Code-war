function rowWeights(array){
let team1 = 0;
let team2 = 0;
let totalWeights = [];
for (let i = 0; i < array.length; i+=1) {
  if (i % 2 === 0) {
    team1 += array[i];
  }else{
    team2 += array[i];
  }
}
  totalWeights = [team1, team2];
  return totalWeights;
}
console.log(rowWeights([1,2,3,4]));