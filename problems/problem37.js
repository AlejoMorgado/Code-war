// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

function inArray(array1,array2){
  const r = [];
  for (let i = 0; i < array1.length; i++) {
    const counter = array1[i]
    for (let j = 0; j < array2.length; j++) {
      if (array2[j].includes(counter) && !r.includes(counter)) {
        r.push(counter);
      }
    }
  }

  return r.sort();

};



a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
a1 = ["xyz", "live", "strong"]

console.log(inArray(a1, a2));