
function explode(x) {
  let score;
  let newArray = [];
  switch (true) {
    case (typeof x[0] === "number" && typeof x[1] === "number"):
      score = x[0] + x[1];
      break;
    case (typeof x[0] === "number"):
      score = x[0];
      break;
    case (typeof x[1] === "number"):
      score = x[1];
      break;
    default:
      return "Void !"
  }
  for (let index = 0; index < score; index++) {
    newArray.push(x);
  }
  return newArray;
}
console.log(explode([3, 3]));