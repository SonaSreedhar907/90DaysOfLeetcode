//1394 find lucky integer in an array


function findLucky(arr){
  var freq = {}
  arr.forEach(function(item){
    if(freq[item]){
        freq[item]+=1
    }else{
        freq[item]=1
    }
  })
  let lucky = -1
  for(let num in freq){
     if(parseInt(num) == freq[num]){
        lucky = Math.max(lucky,parseInt(num))
     }
  }
  return lucky
}
var arr = [2,2,3,4]
console.log(findLucky(arr))