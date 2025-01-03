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
 var b=[]
 for(let i=0;i<s.length;i++){
    if(!b.includes(s[i])){
        b.push(s[i])
    }
 }
 return b
}
var s = [1,1,2,3,3]
console.log(lastword(s))