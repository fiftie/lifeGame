import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { routerMiddleware } from 'react-router-redux';
// import Routes from 'Routes';
// import reducer from 'reducer';

ReactDOM.render(
	<div>hello, world</div>,
	document.getElementById('root')
);