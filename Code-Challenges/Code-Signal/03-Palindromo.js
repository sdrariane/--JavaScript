function solution(inputString) {

 const len = inputString.length;
 
 for(let i = 0; i < len / 2; i++){
     if (inputString[i] !== inputString[len - 1 - i]) {
         return false;
     }
 }
 return true;
}