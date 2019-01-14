import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { routerMiddleware } from 'react-router-redux';
// import Routes from 'Routes';
// import reducer from 'reducer';

import App from './components/App';
import todo from './reducers';
import { addTodo } from './actions';

let store = createStore(todo);

ReactDOM.render(
	<Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

store.dispatch(addTodo('Hello React!'))
store.dispatch(addTodo('Hello Redux!'))