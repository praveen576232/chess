import React from 'react'
import { move, moveHandel } from '../../../chess/chess'
import { useStateValue } from '../../../stateprovider/stateProvider';
import './Promotion.css'
function Promotion({promotion}) {
    const [, dispatch] = useStateValue();
    const promotePieces = ["b","q","r","n"]
    const promote =(piece)=>{
    const legalmove =     move(promotion.from,promotion.to,piece)
   if(legalmove){

    dispatch({
        type: "UPADTE_BOARD",
        board: legalmove,
      });
      dispatch({
        type: "PROMOTION_STAGE",
        promtion: null,
      });
   }
}
    return (
        <div className="promotion">
          
 {   promotePieces.map((p) => 
     
     (<img onClick={()=> promote(p)} src={require(`../../../asserts/${p}_${promotion.color}.png`)} alt="" key={p} className="promotion_piecs"></img>)
 )}
        </div>
    )
}

export default Promotion
