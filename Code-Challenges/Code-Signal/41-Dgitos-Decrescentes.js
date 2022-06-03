function solution(n) {

 let count = 0;

 if(n <= 9){ return count; }
 else{
  while(true){
   count++;
   n = n.toString().split("").reduce((a, b) => { return parseInt(a) + parseInt(b); });
   if(n <= 9){ break; }
  }
 }

 return count;

}