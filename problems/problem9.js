// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.
// The geese are any strings in the following array, which is pre-populated in your solution:
// ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
function gooseFilter(birds) {
  let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  const findBirds = birds.filter(bird => !geese.includes(bird))
  let index = birds.indexOf("Mallard")
  console.log(index);
  return findBirds
}
console.log(gooseFilter(["Mallard", "Barbary", "African", "Hook Bill", "Blue Swedish", "Crested"]));
