// palindrome

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.


function palindrome(x){
    let c=[]
  let b = x.toString()
  for(let i=b.length-1;i>=0;i--){
    c+=b[i]  
  }
  if(x == c){
    return true
  }
  return false
}
var x = 121
console.log(palindrome(x))




