//valid palindrome

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.


function palindrome (s){
 let b=s.replace(/[^A-Za-z0-9]/g,'').toLowerCase()
 let c = b.split('').reverse().join('')
 if(b == c){
    return true
 }
 return false
}
var s = "race a car "
console.log(palindrome(s))


// the reverse() method can be used to reverse a string, but
//  it requires converting
//  the string into an array first.

//split('') used to convert the string into an array of characters(string -> array)
// reverse() used to reverse the elements in the array
//join('') combine the elements of the array back
           //into string   (array ->  string)
