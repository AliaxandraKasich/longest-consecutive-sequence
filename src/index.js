module.exports = function longestConsecutiveLength(array) {
  
  array.sort((x,y) => x-y);
  var count1 = 1;
  var count2 = 1;
  if( array.length === 0){
    return 0;
  }
  if( array.length === 1){
    return 1;
  }
  for(var i=0; i<array.length-1; i++){
    if(array[i+1]-array[i] === 0){
      continue;
     }
    if(array[i+1]-array[i] === 1){
       count1++;
       if(count1 > count2){
        count2 = count1;
      }
      }
    else { count1 = 1;}

    
    
  }
  return count2 ;
}
