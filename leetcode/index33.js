// 2011. Final Value of Variable After Performing Operations



// Example 1:

// Input: operations = ["--X","X++","X++"]
// Output: 1
// Explanation: The operations are performed as follows:
// Initially, X = 0.
// --X: X is decremented by 1, X =  0 - 1 = -1.
// X++: X is incremented by 1, X = -1 + 1 =  0.
// X++: X is incremented by 1, X =  0 + 1 =  1.
// Example 2:

// Input: operations = ["++X","++X","X++"]
// Output: 3
// Explanation: The operations are performed as follows:
// Initially, X = 0.
// ++X: X is incremented by 1, X = 0 + 1 = 1.
// ++X: X is incremented by 1, X = 1 + 1 = 2.
// X++: X is incremented by 1, X = 2 + 1 = 3.


function finalValueAfterOperations(operations){
  var c = 0
  for(let i=0;i<operations.length;i++){
    if(operations[i] == "--X" || operations[i] == "X--"){
        c -= 1
    }
    else if(operations[i] == "++X" || operations[i] =="X++"){
        c += 1
    }
  }
  return c
}
var operations = ["X++","++X","--X","X--"]
console.log(finalValueAfterOperations(operations))