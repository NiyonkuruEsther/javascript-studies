function depth(arr){
    let maxD = 0;
    function arrayDepth(array, depth){
        if(Array.isArray(array)){
             depth++
        if (depth > maxD) {
        maxD = depth;
      }
       array.forEach(function(element) {
        arrayDepth(element, depth);
      });
        }
       
    }
    arrayDepth(arr, 0);
    return maxD;
}

console.log(depth([2,[3, 4[5, 7], [1,3]]]))