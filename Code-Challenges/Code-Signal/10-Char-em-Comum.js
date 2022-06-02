function solution(s1, s2) {
    
 let counter = 0;
 let array01 = s1.split('');
 let y = s2;

 while(array01.length){
  const x = array01.pop();
  if(y.includes(x)){
   counter++;
   y = y.replace(x, '');
  }
 }

 return counter;
}