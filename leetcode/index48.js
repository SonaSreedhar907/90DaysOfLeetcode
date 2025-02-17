// 1768. Merge Strings Alternately

// Example 1:

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r


function mergeAlternately(word1,word2){
     let a =word1.length
     let b =word2.length
     let c = Math.max(a,b)
     let result =""
     for(let i=0;i<c;i++){
         if(i<a){
            result += word1[i]
         }
         if(i<b){
            result += word2[i]
         }
     }
     return result
}
var word1 = "abc"
var word2 = "pqr"
console.log(mergeAlternately(word1,word2))