// //2540 minimum common value


// Example 1:

// Input: nums1 = [1,2,3], nums2 = [2,4]
// Output: 2
// Explanation: The smallest element common to both arrays is 2, so we return 2.
// Example 2:

// Input: nums1 = [1,2,3,6], nums2 = [2,3,4,5]
// Output: 2
// Explanation: There are two common elements

function getCommon(num1,num2){
    let b = []
    let num2set = new Set(num2)
  for(let i=0;i<num1.length;i++){
    if(num2set.has(num1[i])){
      b.push(num1[i])
    }
  }
  if(b.length == 0){
    return -1
  }else{
    return b[0]
  }
}
const num1 = [1,2,3]
const num2 = [2,4,2]
console.log(getCommon(num1,num2))

// https://leetcode.com/problems/minimum-common-value/