function solution(year) {
 let a = year/100;
 let b = year % 100;
 
 if(b != 0){
     a = a + 1;
 }
 
 return Math.trunc(a);
}