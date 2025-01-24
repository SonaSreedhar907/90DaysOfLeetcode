// 2544 alternate digits sum



// Example 1:
// Input: n = 521
// Output: 4
// Explanation: (+5) + (-2) + (+1) = 4.

function alternate(s){
  var a = 0
  var b = s.toString().split('')
  for(let i=0;i<b.length;i++){
   if(i % 2 ==0){
    a+= +b[i]
   }else{
    a-= +b[i]
   }
  }
  return a
}
var s= 886996
console.log(alternate(s))


// function alternate(number){
//     return number.toString().split('').reduce((acc, val) => acc + +val, 0);
//     // var b = number.toString().split('').reduce((acc,curr)=>acc++curr,0)
//     // return b
//   }
//   var number= 521
//   console.log(alternate(number))


//   Important = +'1' convert 1 (string) to 1 (number)