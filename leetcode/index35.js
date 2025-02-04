// 283. Move Zeroes

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]


function moveZeroes(nums){
    var b=[]
    for(let i=0;i<nums.length;i++){
        if(nums[i] !== 0){
          b.push(nums[i])
        }
    }
    
}
var nums = [0,1,0,3,12]
console.log(moveZeroes(nums))