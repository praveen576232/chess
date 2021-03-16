import { init } from "../../chess/chess";

export const intialState = {
  board: init(),
  promotion:null
};

function reducer(state, action) {
  
  switch (action.type) {
    case "UPADTE_BOARD": {
      state.board = action.board;
      return { ...state };
    }
    case 'PROMOTION_STAGE':{
       state.promotion = action.promtion;
       return {...state};
    }
    default:
      return { ...state };
  }
}
export default reducer;
