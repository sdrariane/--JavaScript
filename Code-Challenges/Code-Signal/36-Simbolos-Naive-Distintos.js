function solution(s) {

 let letterArray = [];

 s = s.split("");

 s.forEach((element) => {
  if(letterArray.includes(element) === false){
   letterArray.push(element);
  }
 });

 return letterArray.length;

}