function solution(yourLeft, yourRight, friendsLeft, friendsRight) {

 const yourMax = Math.max(yourLeft, yourRight);
 const friendsMax = Math.max(friendsLeft, friendsRight);
 
 if(friendsMax !== yourMax){ return false; }
 
 return yourLeft + yourRight === friendsLeft + friendsRight;

}