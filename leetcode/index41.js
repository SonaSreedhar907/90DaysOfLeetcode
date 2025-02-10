// 1832. Check if the Sentence Is Pangram

// A pangram is a sentence where every letter of the English alphabet appears at least once.

// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

 

// Example 1:

// Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
// Output: true
// Explanation: sentence contains at least one of every letter of the English alphabet.
// Example 2:

// Input: sentence = "leetcode"
// Output: false


function checkIfPangram(sentence){
  const a = new Set()
  for(let char of sentence.toLowerCase()){
    if(char>='a' && char<='z'){
        a.add(char)
    }
  }
  return a.size === 26
}
var sentence = "The quick brown fox jumps over the lazy dog"
console.log(checkIfPangram(sentence))