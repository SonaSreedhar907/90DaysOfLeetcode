// // 1748. Sum of Unique Elements

// Example 1:

// Input: nums = [1,2,3,2]
// Output: 4
// Explanation: The unique elements are [1,3], and the sum is 4.
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: 0
// Explanation: There are no unique elements, and the sum is 0.
// Example 3:

// Input: nums = [1,2,3,4,5]
// Output: 15
// Explanation: The unique elements are [1,2,3,4,5], and the sum is 15.


//lastIndexOf() method returns the index position of the last occurence 
//of a specified value in a string


function sumOfUnique(nums){   
   return nums.filter(num => nums.indexOf(num) === nums.lastIndexOf(num)).reduce((acc,value)=>acc+value,0) 
}
var nums = [1,2,3,4,5]
console.log(sumOfUnique(nums))