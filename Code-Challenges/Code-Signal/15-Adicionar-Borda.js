function solution(picture) {
    
 var totalLength = picture[0].length + 2;
 var wall = "";
 
 for(let i = 0; i < totalLength; i++){ wall = wall.concat("*"); }
 
 picture.unshift(wall);
 picture.push(wall);

 for(var j = 1; j < picture.length - 1; j++){ picture[j] = "*".concat(picture[j], "*"); }
 
 return picture;
 
}