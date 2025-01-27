// // 1512. Number of Good Pairs


// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
// Example 2:

// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.
// Example 3:

// Input: nums = [1,2,3]
// Output: 0

function numIdenticalPairs(nums){
    count=0
  for(let i=0;i<nums.length;i++){
    for(let j=i+1;j<nums.length;j++){
        if(nums[i] == nums[j]){
            count++
        }
    }
  }
  return count
}
var nums = [1,2,3,1,1,3]
console.log(numIdenticalPairs(nums))
 