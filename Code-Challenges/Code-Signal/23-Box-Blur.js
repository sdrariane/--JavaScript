function solution(image) {

 let imgArray = [];
 
 for(let y = 0; y < image.length - 2; y++){
     let line = [];
     for(let x = 0; x < image[y].length - 2; x++){
         let sum = 0;
         for(let a = y; a < y + 3; a++){
             for(let b = x; b < x + 3; b++){
             sum += image[a][b];
             }
         }
         line.push(Math.floor(sum/9));
     }
     imgArray.push(line);
 }
 return imgArray;
 
 }