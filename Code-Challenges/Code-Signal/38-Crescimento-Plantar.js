function solution(upSpeed, downSpeed, desiredHeight) {

 let totalHeight = 0;
 let days = 0;

 while(totalHeight < desiredHeight){
  days++;
  totalHeight += upSpeed;
  if(totalHeight < desiredHeight){ totalHeight -= downSpeed }
 }

 return days;

}