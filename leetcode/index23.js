// 2129. Capitalize the Title


// If the length of the word is 1 or 2 letters, change all letters to lowercase.
// Otherwise, change the first letter to uppercase and the remaining letters to lowercase.

// Input: title = "First leTTeR of EACH Word"
// Output: "First Letter of Each Word"
// Explanation:
// The word "of" has length 2, so it is all lowercase.
// The remaining words have a length of at least 3, so the first letter of each remaining word is uppercase, and the remaining letters are lowercase.
// Example 3:

// Input: title = "i lOve leetcode"
// Output: "i Love Leetcode"
// Explanation:
// The word "i" has length 1, so it is lowercase.
// The remaining words have a length of at least 3, so the first letter of each remaining word is uppercase, and the remaining letters are lowercase.


// function capitalizeTitle(title){
//   let c = []
//   const b = title.split(' ')
//   for(let i=0;i<b.length;i++){
//     if(b[i].length>2){
//       c.push(b[i].charAt(0).toUpperCase()+b[i].slice(1).toLowerCase())

//     }else{
//         c.push(b[i].toLowerCase())
//     }
//   }
//   return c
// }
// var title = "i lOve leetcode"
// console.log(capitalizeTitle(title))

function capitalizeTitle(title){
    let b = ''
    let c = title.split(' ')
  for(i=0;i<c.length;i++){
    if(c[i].length>2){
        b+=c[i].charAt(0).toUpperCase()+c[i].slice(1).toLowerCase()+ " "
    }else{
        b+=c[i].toLowerCase()+ " "
    }
  }
  return b.trimEnd()
}
var title = "First leTTeR of EACH Word"
console.log(capitalizeTitle(title))
