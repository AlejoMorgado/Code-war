const nums = [1,2,3,4,5];
const sumArray = []; 
const numbersSum = (a,b) => a+b;
nums.forEach(function(element, i){
    if (i < nums.length-1){
        const sumResult = numbersSum(element);
        sumArray.push(sumResult);
        return sumArray;
    }
    return null;
})
     
console.log(sumArray);