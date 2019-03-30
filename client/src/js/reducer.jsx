import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import BoardComponentReducer from './apps/board/_reducers/BoardComponentReducer';

const reducers = {
  routing: routerReducer,

  boardComponent: BoardComponentReducer,
}

export default combineReducers(reducers);