import "./Pieces.css";
import React from "react";
import { DragPreviewImage, useDrag } from "react-dnd";

function Pieces({ pices,poastion}) {
  const [{isDragging}, drag,dragpreviewimage] = useDrag({
    item: {
        type:'pices',
        id:`${poastion}_${pices.type}_${pices.color}`
    },
    collect:(moniter) => {
         return {isDragging : !!moniter.isDragging()};
    }
  });

  const piecesImg = require(`../../../asserts/${pices.type}_${pices.color}.png`);
  return (
      <>
      <DragPreviewImage connect={dragpreviewimage} src={piecesImg}></DragPreviewImage>
    <div ref={drag} style={{opacity:isDragging?0:1}}>
        {piecesImg && <img src={piecesImg} alt=""></img>}
    </div>
    </>
  );
}

export default Pieces;
