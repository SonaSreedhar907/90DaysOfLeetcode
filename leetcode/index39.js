// 844. Backspace String Compare
// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

// Example 1:

// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".
// Example 2:

// Input: s = "ab##", t = "c#d#"
// Output: true
// Explanation: Both s and t become "".
// Example 3:

// Input: s = "a#c", t = "b"
// Output: false
// Explanation: s becomes "c" while t becomes "b".



var backspaceCompare = function(s,t){
  function processString(str) {
    var stack = []
    for(let i in str){
        if(i == "#"){
            stack.pop()
        }else{
            stack.push(i)
        }
    }
    return stack.join('')
  }
return processString(s) === processString(t)
}
var s = "ab#c"
var t = "ad#c"
console.log(backspaceCompare(s,t))