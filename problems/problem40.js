// An array is defined to be odd-heavy if it contains at least one odd element and every element whose value is odd is greater than every even-valued element.
// Array [11,4,9,2,8] is odd-heavy,
// because its odd elements [11,9] are greater than all the even elements [4,2,8]
// Array [11,4,9,2,3,10] is not odd-heavy,
// because one of its even elements (10 from [4,2,10]) is greater than two of
// its odd elements (9 and 3 from [11,9,3])
// Array [] is not odd-heavy,
// because it does not contain any odd numbers
// Array [3] is odd-heavy,
// because it does not contain any even numbers.

function isOddHeavy(n) {
  let oddHeavy = 0;
  let notOddHeavy = 0;
  for (let i = 0; i < n.length; i++) {
    if (n[i] % 2 !== 0) {
      let greaterEven = false;
      for (let j = 0; j < n.length; j++) {
        if (n[j] % 2 === 0 && n[j] > n[i]) {
          greaterEven = true;
        }
      }
      if (!greaterEven) {
        oddHeavy++;
      } else {
        notOddHeavy++;
      }
    }
  }
  if (oddHeavy > notOddHeavy) {
    return "Is odd-heavy";
  } else {
    return "Is not odd-heavy";
  }
}
console.log(isOddHeavy([4, 4, 9, 2, 8]));
