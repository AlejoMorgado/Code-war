const data = [1, 2, 3];

const reverseArray = () => {
  const newArray = [];
  for (let i = data.length - 1; i >= 0; i -= 1) {
    newArray.push(data[i]);
  }
  return newArray
}
console.log(reverseArray());