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
