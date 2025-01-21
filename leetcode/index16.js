// 268 missing number    - https://leetcode.com/problems/missing-number/

// Example 1:
// Input: nums = [3,0,1]
// Output: 2


// Example 2:
// Input: nums = [0,1]
// Output: 2


function missingNumber(nums){
  var b = new Set(nums)
  for(let i=0;i<=nums.length;i++){
    if(!b.has(i)){
      return i
    }
  }
}
var nums = [0,1]
console.log(missingNumber(nums))