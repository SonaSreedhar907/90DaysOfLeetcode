// 2665. Counter II

// Example 1:

// Input: init = 5, calls = ["increment","reset","decrement"]
// Output: [6,5,4]
// Explanation:
// const counter = createCounter(5);
// counter.increment(); // 6
// counter.reset(); // 5
// counter.decrement(); // 4


function createCounter(init){
    let count = init
    return {
       increment : ()=> ++count,
       decrement : ()=> --count,
       reset : () =>(count = init)
    }

}
const counter = createCounter(5)
console.log(counter.increment())