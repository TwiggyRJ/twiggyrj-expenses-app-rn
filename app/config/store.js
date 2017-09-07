import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  const middewares = [
    //add middlewares here
    thunkMiddleware,
    logger,
  ];

  return createStore(rootReducer, initialState, compose(
    applyMiddleware(...middewares)
  ));
}
