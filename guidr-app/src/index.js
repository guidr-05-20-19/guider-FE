import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import combineReducers from './reducers';


const store = createStore (combineReducers, applyMiddleware(thunk, logger));


const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
