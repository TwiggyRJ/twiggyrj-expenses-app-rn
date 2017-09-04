import { AUTHENTICATE_SUCCESS, REGISTER_SUCCESS } from './actions';
import apiClient from '../config/client.js';

//Sends data to reducer with this action
export const authenticateSuccess = (users) => {
  return {
    type: AUTHENTICATE_SUCCESS,
    users
  }
}

export const registerSuccess = (users) => {
  return {
    type: REGISTER_SUCCESS,
    users
  }
}

//Our function that is initiated from the GUI
export function authenticate(email, password) {
  return dispatch => {
    console.log('API Client OBJ')
    console.log(apiClient)
    apiClient.owner.getToken(email, password).then((user) => {
	console.log(user)
      let data = { email: email, password: password };
      dispatch(authenticateSuccess(user))
    });
  }
}

export function register(name, email, password) {
  return dispatch => {
    let data = { name: name, email: email, password: password };
    dispatch(registerSuccess(data))
  }
}
