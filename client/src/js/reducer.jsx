import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import BoardComponentReducer from './apps/board/_reducers/BoardComponentReducer';
import PieceComponentReducer from './apps/board/Pieces/_reducers/PieceComponentReducer';

const reducers = {
  routing: routerReducer,

  boardComponent: BoardComponentReducer,
  pieceComponent: PieceComponentReducer,
}

export default combineReducers(reducers);