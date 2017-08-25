import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  const middewares = [
    //add middlewares here
    thunkMiddleware,
  ];

  return createStore(rootReducer, initialState, compose(
    applyMiddleware(...middewares)
  ));
}
