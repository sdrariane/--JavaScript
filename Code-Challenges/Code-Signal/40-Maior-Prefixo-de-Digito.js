function solution(inputString) {

 let digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
 inputString = inputString.split("");
 let prefix = [];

 for(let i = 0; i < inputString.length; i++){
  if(digits.includes(inputString[i]) === false){ break; }
  prefix.push(inputString[i]);
 }

 return prefix.join("");

}