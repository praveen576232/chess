import Chess  from 'chess.js';
import React, { useEffect, useState } from 'react';

import './App.css';

import { init } from './chess/chess';
import Board from './Game/Chess/board/Board';

function App() {
  const [board,setboard]=useState([]);
  useEffect(() => {
  const board = init();
 
   setboard(board)
  }, [])
  return (
    <div className="app">
   <div className="app_board">

     <Board/>
   </div>
     
    </div>
  );
}

export default App;
