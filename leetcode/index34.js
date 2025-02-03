// 1486. XOR Operation in an Array

// Example 1:

// Input: n = 5, start = 0
// Output: 8
// Explanation: Array nums is equal to [0, 2, 4, 6, 8] where (0 ^ 2 ^ 4 ^ 6 ^ 8) = 8.
// Where "^" corresponds to bitwise XOR operator.

function xorOperation(n,start){
  var b =[]
  for(let i=0;i<n;i++){
    b.push(start+2*i)
  }
  var c = b.reduce((acc,value) => acc ^ value,0)
  return c
}
var n = 5
var start = 0
console.log(xorOperation(n,start))