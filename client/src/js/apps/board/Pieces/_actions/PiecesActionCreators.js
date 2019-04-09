import Types from './PiecesActionTypes';
import {PieceMovable} from '/Users/fifty/workspace/game/shogi/client/src/js/commons/Pieces/PieceMovable';;

export const firstPlay = (select, selected) => {
  return (dispatch, getState) => {
    let { firstBoardPieces } = getState().pieceComponent;
    const targetPiece = firstBoardPieces[select[0]][select[1]];
    if(PieceMovable(targetPiece, select[0], select[1], selected[0], selected[1])) {
      firstBoardPieces[select[0]][select[1]] = 0;
      firstBoardPieces[selected[0]][selected[1]] = targetPiece;
      const action = {
        type: Types.FIRST_PLAY_SUCCESS,
        firstBoardPieces: firstBoardPieces,
      }
      dispatch(action);
    }else{
      const action = {
        type: Types.FIRST_PLAY_FAILED
      }
      dispatch(action);
    }
  }
}

export const lastPlay = (select, selected) => {
  return (dispatch, getState) => {
    let { lastBoardPieces } = getState().pieceComponent;
    const targetPiece = lastBoardPieces[select[0]][select[1]];
    if(PieceMovable(targetPiece, select[0]*-1, select[1]*-1, selected[0]*-1, selected[1]*-1)) {
      lastBoardPieces[select[0]][select[1]] = 0;
      lastBoardPieces[selected[0]][selected[1]] = targetPiece;
      const action = {
        type: Types.LAST_PLAY_SUCCESS,
        lastBoardPieces: lastBoardPieces,
      }
      dispatch(action);
    }else{
      const action = {
        type: Types.LAST_PLAY_FAILED
      }
      dispatch(action);
    }
  }
}