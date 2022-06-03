function solution(inputArray, k) {

 return inputArray.filter((element, index) => {
  return (index + 1) % k != 0;
 })

}