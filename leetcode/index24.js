// 557. Reverse Words in a String III

// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Example 2:

// Input: s = "Mr Ding"
// Output: "rM gniD"


function reverseWords(s){
  var d = ""
  var b = s.split(' ')
  for(let i=0;i<b.length;i++){
   d+=b[i].split('').reverse().join('')+" "
  }
  return d.trimEnd()
}
var s = "Mr Ding"
console.log(reverseWords(s))