function solution(n) {

 n = n.toString();
 
 let half = n.length/2;
 
 let first_half = n.substring(0, half).split('').reduce((a,b) => { return parseInt(a)+ parseInt(b); });
 let secon_half = n.substring(half, n.length).split('').reduce((a,b) => { return parseInt(a)+ parseInt(b); });
 
 return first_half === secon_half;    
 
}