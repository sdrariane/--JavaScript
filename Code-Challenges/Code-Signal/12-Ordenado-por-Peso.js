function solution(a) {
    
 var arr2 = a;

 arr2 = arr2.filter((element) => {
  if(element != -1){
   return element;
  }
 }).sort((a,b) => {
  return a-b;
 });
 
 var indexVal = 0;

 for(var i = 0; i < a.length; i++){
  if(a[i] != -1){
   a[i] = arr2[indexVal];
   indexVal++;
  }
 }

 return a;

}