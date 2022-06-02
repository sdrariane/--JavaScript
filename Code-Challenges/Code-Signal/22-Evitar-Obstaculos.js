function solution(inputArray) {

 for(let i = 1; ;i++){ if(inputArray.every(element => element % i)) return i }
 
 }