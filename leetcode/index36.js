// 1480. Running Sum of 1d Array

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4]


function runningSum(nums){
   var b = []
   let sum = 0
   for(let i=0;i<nums.length;i++){
     sum += nums[i]
     b.push(sum)
   }
   return b
}
var nums = [1,2,3,4]
console.log(runningSum(nums))