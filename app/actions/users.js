import { AUTHENTICATE_SUCCESS } from './actions';

//Sends data to reducer with this action
export const authenticateSuccess = (users) => {
  return {
    type: AUTHENTICATE_SUCCESS,
    users
  }
}

//Our function that is initiated from the GUI
export function authenticate(email, password) {
  return dispatch => {
    let data = { email: email, password: password };
    dispatch(authenticateSuccess(data))
  }
}
