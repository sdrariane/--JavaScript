let input = gets();

let qtdEntradas = parseInt(input);
var arr = new Array();

for(let i = 0; i < qtdEntradas; i++){
    
    input = gets();
    let tempo = parseFloat(input);

    arr.push(tempo);
        	
}

arr.sort();
    
var min = Math.min(...arr);

print(min);