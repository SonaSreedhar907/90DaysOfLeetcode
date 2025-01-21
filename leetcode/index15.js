// 1662 check if two strings arrays are equivalent

// Example 1:

// Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
// Output: true
// Explanation:
// word1 represents string "ab" + "c" -> "abc"
// word2 represents string "a" + "bc" -> "abc"
// The strings are the same, so return true.
// Example 2:

// Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
// Output: false
// Example 3:

// Input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
// Output: true


function arrayStringsAreEqual(word1,word2){
   var a = word1.toString().replace(/,/g,'')
   var b = word2.toString().replace(/,/g,'')
   if(a == b){
    return true
   }
   return false

}
var word1 = ["a", "cb"]
var word2 = ["ab", "c"]
console.log(arrayStringsAreEqual(word1,word2))