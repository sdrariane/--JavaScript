function solution(inputArray) {
 var max = Math.abs(inputArray[0] - inputArray[1]);

 for(var i = 1; i < inputArray.length; i++){
 var current = Math.abs(inputArray[i - 1] - inputArray[i]);

 max = (current > max) ? current : max;
 }

 return max;
}