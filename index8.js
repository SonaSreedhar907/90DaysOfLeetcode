// Example 1:

// Input: s = "Hello"
// Output: "hello"
// Example 2:

// Input: s = "here"
// Output: "here"
// Example 3:

// Input: s = "LOVELY"
// Output: "lovely"


function toUpperCase (s){
  let b=""
  for(let i=0;i<s.length;i++){
    if(i == 0){
        b += s[i].toUpperCase()
    }else{
        b += s[i]
    }
  }
  return b
}
var s = "here"
console.log(toUpperCase(s))