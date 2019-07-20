function countHandshake(num){
    var count = 0
    for(var i = num-1; i>0; i--){
        count += i
   }
   return count
}

console.log(countHandshake(6))