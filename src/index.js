module.exports = function longestConsecutiveLength(array) {
  function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
  }  
  array.sort(compareNumeric);
  var count1 = 0;
  var count2 = 0;
  if( array.length === 0){
    return 0;
  }
  if( array.length === 1){
    return 1;
  }
  for(var i=0; i<array.length-1; i++){
    if(array[i+1]-array[i] === 1){
       count1++;
      }
    else{
      if(count1>= count2){
        count2 = count1;
      }
      count1 = 0;
    }
  }
  return count2 + 1;
}
