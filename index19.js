// 2108. Find First Palindromic String in the Array


// Example 1:

// Input: words = ["abc","car","ada","racecar","cool"]
// Output: "ada"
// Explanation: The first string that is palindromic is "ada".
// Note that "racecar" is also palindromic, but it is not the first.
// Example 2:

// Input: words = ["notapalindrome","racecar"]
// Output: "racecar"
// Explanation: The first and only string that is palindromic is "racecar".
// Example 3:

// Input: words = ["def","ghi"]
// Output: ""
// Explanation: There are no palindromic strings, so the empty string is returned.
 

function firstPalindrome(words){
    let c = []
  for(let i=0;i<words.length;i++){
    var b = words[i].split('').reverse().join('')
    if(words[i] == b){
        c.push(words[i])
    }
   }
   if(c.length == 0){
    return ""
   }else{
    return c[0]
   }
  
}
let words = ["notapalindrome","racecar"]
console.log(firstPalindrome(words))