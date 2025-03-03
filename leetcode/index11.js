// 2455. Average Value of Even Numbers That Are Divisible by Three

// Example 1:

// Input: nums = [1,3,6,10,12,15]
// Output: 9
// Explanation: 6 and 12 are even numbers that are divisible by 3. (6 + 12) / 2 = 9.
// Example 2:

// Input: nums = [1,2,4,7,10]
// Output: 0
// Explanation: There is no single number that satisfies the requirement, so return 0.


// function averageValue(nums){
//     let b =[]
//    for(let i=0;i<nums.length;i++){
//     if(nums[i]>3 && nums[i]%2 == 0 && nums[i]%3 == 0){
//        b.push(nums[i])
//     }
//    }
//    if(b.length !== 0){
//     var s = b.map(n=>n).reduce((acc,val)=>acc+val,0) / b.length   //acc initialvalue = 0
//     return Math.floor(s) 
//    }
//    return 0
//  }
//  var nums = [43,9,75,76,25,96,46,85,19,29,88,2,5,24,60,26,76,24,96,82,97,97,72,35,21,77,82,30,94,55,76,94,51]
//  console.log(averageValue(nums))


 //Math.floor() is used to convert the floating point number to 
//  integer

 
 // function averageValue(nums){
 //     let b=[]
 //     let c= []
 //     let x=0
 //    for(let i=0;i<nums.length;i++){
 //     if(nums[i]>3){
 //       b.push(nums[i])
 //     }
 //    }
 //    for(let j=0;j<b.length;j++){
 //     if(b[j]%3 == 0 && b[j]%2 == 0){
 //        c.push(b[j])
 //     }
 //    }
 //    for(let z=0;z<c.length;z++){
 //     x+=c[z]
 //    }
 //    return x/2
 // }
 // var nums = [9,8,4,5,8,6]
 // console.log(averageValue(nums))
 
 
 // https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/description/
 
 
 
 //acc explanation simple
 
 // If numbers = [1, 2, 3]:
 
 // numbers.map(x => x * 2) → [2, 4, 6]
 // reduce works like this:
 // Start with acc = 0 (initial value).
 // Add the first val = 2 → acc = 0 + 2 = 2.
 // Add the second val = 4 → acc = 2 + 4 = 6.
 // Add the third val = 6 → acc = 6 + 6 = 12.