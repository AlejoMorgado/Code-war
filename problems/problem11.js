// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.
// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.
// All inputs will be valid.
function last(x) {
  let arr = [];
  let words = x.split(' ');
  for (let index = 0; index < words.length; index++) {
    arr.push(words[index])
    arr.sort((a, b) => {
      const lastCharA = a.slice(-1);
      const lastCharB = b.slice(-1);
      if (lastCharA < lastCharB) {
        return -1;
      } else if (lastCharA > lastCharB) {
        return 1;
      } else {
        return 0;
      }
    });
  }
  return arr
}
console.log(last('hagdhaad dashjkdshbx akdjhasdhca adhjasjkhdg'));