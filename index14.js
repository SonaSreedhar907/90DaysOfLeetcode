// // 2894 divisible and non-divisible sums difference

// Input: n = 10, m = 3
// Output: 19
// Explanation: In the given example:
// - Integers in the range [1, 10] that are not divisible by 3 are [1,2,4,5,7,8,10], num1 is the sum of those integers = 37.
// - Integers in the range [1, 10] that are divisible by 3 are [3,6,9], num2 is the sum of those integers = 18.
// We return 37 - 18 = 19 as the answer.



function differenceOfSums(n,m){
    var num1 = 0
    var num2 = 0
   for(let i=1;i<=n;i++){
    if(i % m == 0){
       num2+=i
    }else{
        num1+=i
    }
   }
   return num1-num2
}
var n = 10
var m = 3
console.log(differenceOfSums(n,m))