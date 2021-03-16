import './Board.css';
import React, { useEffect, useState } from 'react'
import {StateProvider, useStateValue} from '../../../stateprovider/stateProvider'
import BoardSquares from '../BordeSquares/BoardSquares';
function Board() {
    const [ myBoard,setMyBoard ]=useState([])
    const [{board}] = useStateValue();
    useEffect(() => {
   
      setMyBoard(board)
    }, [board])
const getPoastion =(i) =>{
   
    const x =i % 8 ;
        const y =Math.abs(Math.floor(i/8 - 7));
   
     return {x,y}
}
 
  const  checkBlack=(i)=>{
      const {x,y} = getPoastion(i);
     
      return (x+y)%2 === 1;
  }
  const getMyPoastion = (i) =>{
      const {x,y}  =getPoastion(i);
      const letter = ['a','b','c','d','e','f','g','h'][x];
      return `${letter}${y+1}`;
  }
    return (
        <div className="board">
            {
                myBoard && myBoard.flat().map((squ,i)=>(
                    <BoardSquares key={i} isblack={checkBlack(i)} piece={squ} poastion = {getMyPoastion(i) }></BoardSquares>
                ))
            }
        </div>
    )
}

export default Board
