// Subtract the Product and Sum of Digits of an Integer
// Example 1:

// Input: n = 234
// Output: 15 
// Explanation: 
// Product of digits = 2 * 3 * 4 = 24 
// Sum of digits = 2 + 3 + 4 = 9 
// Result = 24 - 9 = 15

// Example 2:

// Input: n = 4421
// Output: 21
// Explanation: 
// Product of digits = 4 * 4 * 2 * 1 = 32 
// Sum of digits = 4 + 4 + 2 + 1 = 11 
// Result = 32 - 11 = 21

function subtractProductAndSum(n){
 const b = String(n).split('').map(Number)
 var d = 1
 var e = 0
 for(let i=0;i<b.length;i++){
   d *= b[i]
   e += b[i]
 }
 return d-e
}
console.log(subtractProductAndSum(4421))



//map(Number) - here convert the string into a number