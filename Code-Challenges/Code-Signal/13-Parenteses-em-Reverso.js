function solution(inputString) {
    
 let x = inputString;

 while(x.includes('(')){
     const end = x.indexOf(')');
     const start = x.lastIndexOf('(', end);
     const s = x.slice(start + 1, end);
     const reversedS = s.split('').reverse().join('');
     x = x.slice(0, start) + reversedS + x.slice(end + 1);
 }

 return x;

}