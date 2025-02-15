//414 Third Maximum Number


// Input: nums = [3,2,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2.
// The third distinct maximum is 1.
// Example 2:

// Input: nums = [1,2]
// Output: 2
// Explanation:
// The first distinct maximum is 2.
// The second distinct maximum is 1.
// The third distinct maximum does not exist, so the maximum (2) is returned instead.

function thirdMax(nums) {
 // Sort a copy of nums in descending order
 var b = [...nums].sort((a, b) => b - a);  
 // Remove duplicates using Set
 var c = [...new Set(b)];
 // Return the third maximum if it exists, otherwise return the maximum
 return c.length >= 3 ? c[2] : c[0];}
var nums = [3,3,4,3,4,3,0,3,3]
console.log(thirdMax(nums))