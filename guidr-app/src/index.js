import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers/loginReducer';
import App from './App';
import logger from 'redux-logger';
import combineReducers from './reducers';


const store = createStore (combineReducers, applyMiddleware(logger,thunk));


const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
