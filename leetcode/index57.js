// 1796. Second Largest Digit in a String

// Given an alphanumeric string s, return the second largest numerical digit that appears in s, or -1 if it does not exist.

// An alphanumeric string is a string consisting of lowercase English letters and digits.

// Example 1:

// Input: s = "dfa12321afd"
// Output: 2
// Explanation: The digits that appear in s are [1, 2, 3]. The second largest digit is 2.
// Example 2:

// Input: s = "abc1111"
// Output: -1
// Explanation: The digits that appear in s are [1]. There is no second largest digit.



function secondHighest(s){
  var b = s.replace(/[a-z]/gi,"").split('').map(Number)
  var c = [...new Set(b)].sort((a,b)=>b-a)
  return c.length >1 ? c[1] : -1
}
var s = "ck077"
console.log(secondHighest(s))