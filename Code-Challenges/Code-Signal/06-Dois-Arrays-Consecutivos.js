function solution(statues) {
    
 let sorted = statues.sort((a, b) => a - b);
 let counter = 0;
 
 for(let i = 0; i < statues.length - 1; i++){
     
     if(statues[i+1]-statues[i] !== 1){
         let statuesNumber = 0;
         statuesNumber = statues[i+1] - statues[i] - 1;
         counter += + statuesNumber;
     }
 }
 
 return counter;
 
}