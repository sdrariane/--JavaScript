function solution(inputArray) {
    
 var largestElement = inputArray[0].length;
 
 for(var i = 0; i < inputArray.length; i++){
     if(largestElement < inputArray[i].length){
         largestElement = inputArray[i].length;
     }
 }
 
 inputArray = inputArray.filter((element) => { return element.length === largestElement; });
 
 return inputArray;
 
}