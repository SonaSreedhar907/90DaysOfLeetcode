// 520. Detect Capital

// Example 1:

// Input: word = "USA"
// Output: true
// Example 2:

// Input: word = "FlaG"
// Output: false


// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".   = true
// All letters in this word are not capitals, like "leetcode".  = true
// Only the first letter in this word is capital, like "Google". = true  

function detectCapitalUse(word){
   if(word  == word.charAt(0).toUpperCase()+word.slice(1).toLowerCase() || word == word.toUpperCase() || word == word.toLowerCase() ){
     return true
   }  
   return false
}
var word = "Leetcode"
console.log(detectCapitalUse(word))


