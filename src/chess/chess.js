import  Chess  from "chess.js"
var chessboard;

export const init=() =>{
    chessboard = new Chess();
    
    return chessboard.board();
}

export const moveHandel = (from,to)=>{
    const promotion = chessboard.moves({ verbose: true }).filter((m)=>m.promotion);
  
    if(promotion.some((p)=>`${p.from}:${p.to}`===`${from}:${to}`)){
       
       return { "promotion":{color:promotion[0].color,from:from,to:to}}
    } else{
      
     return   move(from,to)
    }
}


export const move = (from,to,promotion) =>{
    const cond = {from,to}
 if(promotion){
    cond.promotion = promotion;
 }

const newBoard=   chessboard.move(cond);
 
 if(newBoard){
    return chessboard.board();
   }else{
       return null;
   }
}