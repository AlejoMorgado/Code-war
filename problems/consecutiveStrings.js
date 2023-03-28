function longestConsec(strarr, k) {
  let largestStrings = "";
  if (strarr.length === 0 || k > strarr.length || k < 0) {
    return "";
  } else {
    for (let index = 0; index <= strarr.length; index++) {
      let concatStrings = strarr.slice(index, index+k).join("");
      if (concatStrings.length > largestStrings.length) {
        largestStrings = concatStrings;
      }
    }
    return largestStrings;
  }
}
console.log(longestConsec(["zone", "abigail", "theta", "form", "libehibyelol", "zas", "theta", "abigail"], 4));  