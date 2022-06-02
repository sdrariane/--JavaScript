function solution(n) {
 if(n == 1){
     return 1;
 } else {
     a=1;
     for(let i = 1; i < n+1; i++){
         a = a + i * 4 - 4;
     }
 return a;
 }
}