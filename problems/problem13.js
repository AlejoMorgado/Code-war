// Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.
function flatten(arr) {
  let result = [];
  
  arr.forEach(item => {
    result = result.concat(item);
  });
  
  return result;
}
console.log(flatten([[1, 2, 3], ["a", "b", "c"], [1, 2, 3]])); 
// remove nested array javascript without flat