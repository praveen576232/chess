import "./BoardSquares.css";
import React, { useEffect, useState } from "react";
import Squares from "./Squares/Squares";
import Piece from "../pieces/Pieces";
import { useDrop } from "react-dnd";
import { move, moveHandel } from "../../../chess/chess";
import { useStateValue } from "../../../stateprovider/stateProvider";
import Promotion from "../promotion/Promotion";

function BoardSquares({ isblack, piece, poastion }) {
  const [{ promotion }, dispatch] = useStateValue();
  const [mypromotion, setPromotion] = useState(null);
useEffect(()=>{setPromotion(promotion)},[promotion])
  const [, drop] = useDrop({
    accept: "pices",
    drop: (item) => {
      const fromPoastion = item.id.split("_")[0];

      if (!promotion) {
        const movepiece = moveHandel(fromPoastion, poastion);
        if (movepiece) {
          if (movepiece.promotion) {
          
            setPromotion(movepiece.promotion);
            dispatch({
              type: "PROMOTION_STAGE",
              promtion: movepiece.promotion,
            });
          } else {
            dispatch({
              type: "UPADTE_BOARD",
              board: movepiece,
            });
          }
        }
      }
    },
  });
  return (
    <div
      ref={drop}
      className={`boardSquares ${
        isblack ? "boardSquares-black" : "boardSquares-white"
      }`}
    >
      <Squares>
        {promotion && promotion.to === poastion ? (
          <Promotion promotion={promotion}></Promotion>
        ) : piece ? (
          <Piece pices={piece} poastion={poastion}></Piece>
        ) : null}
      </Squares>
    </div>
  );
}

export default BoardSquares;
