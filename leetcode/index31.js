// 1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence

// Example 2:

// Input: sentence = "this problem is an easy problem", searchWord = "pro"
// Output: 2
// Explanation: "pro" is prefix of "problem" which is the 2nd and the 6th word in the sentence, but we return 2 as it's the minimal index.
// Example 3:

// Input: sentence = "i am tired", searchWord = "you"
// Output: -1
// Explanation: "you" is not a prefix of any word in the sentence.


function isPrefixOfWord(sentence,searchWord){
  var b = sentence.split(' ')
  for(let i=0;i<b.length;i++){
     if(b[i].startsWith(searchWord)){
        return i+1
    }
  }
  return -1
}
var sentence = "i love eating burger"
var searchWord = "burg"
console.log(isPrefixOfWord(sentence,searchWord))