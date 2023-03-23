var singleNumber = function(nums) {
  let identifyNum = 0;
  for (let index = 0; index <= nums.length; index++) {
   identifyNum ^= nums[index]
  }
  return identifyNum
}