import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import combineReducers from './reducers';

const store = createStore (combineReducers, applyMiddleware(logger,thunk));



ReactDOM.render(
<Provider store ={store}>
<App />
</Provider>
, document.getElementById('root'));


