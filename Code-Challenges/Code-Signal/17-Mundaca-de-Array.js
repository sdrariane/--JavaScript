function solution(inputArray) {
    
 var counter = 0;
 
 inputArray.reduce((a, b) => {
     if(a >= b){
         const diff = (a + 1) - b;
         counter += diff;
         return a + 1;
     }
     return b;
 });
 
 return counter;

}