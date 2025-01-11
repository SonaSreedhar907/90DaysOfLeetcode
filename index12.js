//217 contains duplicate

// Example 1:

// Input: nums = [1,2,3,1]

// Output: true

// Explanation:

// The element 1 occurs at the indices 0 and 3.

// Example 2:

// Input: nums = [1,2,3,4]

// Output: false

// Explanation:

// All elements are distinct.


function containDuplicates(a){
 var b = [...new Set(a)]
 if(a.length == b.length){
    return false
 }
 return true
}
var a = [1,2,3,1]
console.log(containDuplicates(a))
