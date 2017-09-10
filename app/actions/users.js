import { AUTHENTICATE_SUCCESS, REGISTER_SUCCESS } from './actions';
import { api, credentials } from '../config/client';
import { getToken } from '../lib/oauth';

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
    let token = getToken(email, password);
    api.post('/oauth/token',
    {
        client_id: '3',
        client_secret: 'klQVZFUCYh4OqDdfuXw5qpTjClDRWNVsrqJfiaaO',
        grant_type : 'password',
        username: email,
        password: password,
    }).then((res) => {
      api.get('/api/user',
      {
        headers: {
          'Authorization' : `Bearer ${res.data.access_token}`,
        }
      }).then((response) => {
        dispatch(authenticateSuccess(response.data))
      }).catch((error) => {
        console.log(error);
        console.log(credentials)
      });
    });

  }
}

export function register(name, email, password) {
  return dispatch => {
    let data = { name: name, email: email, password: password };
    dispatch(registerSuccess(data))
  }
}
