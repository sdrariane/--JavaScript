function solution(a) {
    
 let team1 = [];
 let team2 = [];
 var lodash = require('lodash');
 
 for(let i = 0; i < a.length; i++){   
     if(i % 2 == 0){
         team1.push(a[i]);
     } else {
         team2.push(a[i]);
     }
 }
 
 var sum01 = lodash.sum(team1);
 var sum02 = lodash.sum(team2);
 
 let final = [sum01, sum02];
 
 return final;

}