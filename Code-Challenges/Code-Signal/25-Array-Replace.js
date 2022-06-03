function solution(inputArray, elemToReplace, substitutionElem) {
 inputArray.forEach((element, index) => {
  if(element === elemToReplace){
   inputArray[index] = substitutionElem;
  }
 });
 return inputArray;
}