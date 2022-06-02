function solution(matrix) {
    
 let p = 0;
 let sub = [];
 
 for(let i = 0; i < matrix.length; i++){
     for(let j = 0; j < matrix[i].length; j++){
         if(matrix[i][j] === 0){
             sub.push(j);
         } else if (sub.indexOf(j) === -1) {
             p += matrix[i][j];
         }
     }
 }
 
 return p;

}