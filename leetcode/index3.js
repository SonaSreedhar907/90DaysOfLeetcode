// length of the last word

// Example 1:



// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6

function lastword(s){
  var st = s.trim()
  var p = st.split(" ")
  for(let i =p.length-1;i>=p.length-1;i--){
    return p[i].length
  }
}
var s = "Hello World"
console.log(lastword(s))


