function solution(matrix){
 const board = []

 for(let x = 0; x < matrix.length; x++){
  board.push([])

  for(let y = 0; y < matrix[0].length; y++){
   board[x][y] = 0

   if(matrix[x-1] !== undefined){
    if(matrix[x-1][y]){
     board[x][y]++
    }
   }

   if(matrix[x+1] !== undefined){
    if(matrix[x+1][y]){
     board[x][y]++
    }
   }

   if(matrix[x][y-1] !== undefined){
    if(matrix[x][y-1]){
     board[x][y]++
    }
   }

   if(matrix[x][y+1] !== undefined){
    if(matrix[x][y+1]){
     board[x][y]++
    }
   }

   if(matrix[x-1] !== undefined){
    if(matrix[x-1][y-1]){
     board[x][y]++
    }
   }

   if(matrix[x-1] !== undefined){
    if(matrix[x-1][y+1]){
     board[x][y]++
    }
   }

   if(matrix[x+1] !== undefined){
    if(matrix[x+1][y-1]){
     board[x][y]++
    }
   }

   if(matrix[x+1] !== undefined){
    if(matrix[x+1][y+1])[
     board[x][y]++
    ]
   }
  }
 }
 return board
}