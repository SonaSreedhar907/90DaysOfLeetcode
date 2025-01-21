// 2114. Maximum Number of Words Found in Sentences


// Example 1:
// Input: sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
// Output: 6


// note - The ... (spread syntax) converts the array into individual elements.


function mostWordsFound(sentences){
    var b = []
    for(let i=0;i<sentences.length;i++){
        b.push(sentences[i].split(' ').length)
    }
    return Math.max(...b)
}
var sentences = ["please wait", "continue to fight", "continue to win"]
console.log(mostWordsFound(sentences))