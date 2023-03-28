// Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.
// https://edabit.com/challenge/xsi99TwpGyFC8KS6d
function numberSplit(n) {
  let finalSplit = [];
	let firstNumber = Math.floor(n / 2);
  finalSplit.push(firstNumber)
  let secondNumber = Math.round(n / 2);
  finalSplit.push(secondNumber)
return finalSplit
}
console.log(numberSplit(-9));