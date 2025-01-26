// 2727. Is Object Empty

// Example 1:

// Input: obj = {"x": 5, "y": 42}
// Output: false
// Explanation: The object has 2 key-value pairs so it is not empty.
// Example 2:

// Input: obj = {}
// Output: true
// Explanation: The object doesn't have any key-value pairs so it is empty.


function isObjectEmpty(obj){
  if(Object.keys(obj).length == 0){
    return true
  }else{
    return false
  }
}
var obj = {}
console.log(isObjectEmpty(obj))