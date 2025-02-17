// 2574. Left and Right Sum Differences

// Example 1:

// Input: nums = [10,4,8,3]
// Output: [15,1,11,22]
// Explanation: The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0].
// The array answer is [|0 - 15|,|10 - 11|,|14 - 3|,|22 - 0|] = [15,1,11,22].
// Example 2:

// Input: nums = [1]
// Output: [0]
// Explanation: The array leftSum is [0] and the array rightSum is [0].
// The array answer is [|0 - 0|] = [0].


function leftRightDifference(nums){
  let n = nums.length
  let leftSum = new Array(n).fill(0)
  let rightSum = new Array(n).fill(0)
  let answer = new Array(n).fill(0)
  // Compute leftSum  
  for (let i = 1; i < n; i++) {
      leftSum[i] = leftSum[i - 1] + nums[i - 1];
  }
  // Compute rightSum
  for (let i = n - 2; i >= 0; i--) {
      rightSum[i] = rightSum[i + 1] + nums[i + 1];
  }
  // Compute answer array
  for (let i = 0; i < n; i++) {
      answer[i] = Math.abs(leftSum[i] - rightSum[i]);
  }
  return answer;

}
var nums = [10,4,8,3]
console.log(leftRightDifference(nums))