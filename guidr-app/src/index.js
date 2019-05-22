import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
<<<<<<< HEAD
import thunk from 'redux-thunk';
import reducer from './reducers/loginReducer';
=======
>>>>>>> a8c4452940987a58edc238a157fd5a65956e63bf
import App from './App';
import logger from 'redux-logger';
import combineReducers from './reducers';


const store = createStore (combineReducers, applyMiddleware(thunk, logger));


const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
