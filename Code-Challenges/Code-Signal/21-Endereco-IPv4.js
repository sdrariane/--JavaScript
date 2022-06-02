function solution(inputString) {

 const arr = inputString.split('.');
 
 if(arr.length == 4){
     return arr.every(number => {
         if(number >= 0 && number <= 255 && number != '' && number != '00' && number != '01') return true
         return false
     })
 }
 
 return false
 
 }