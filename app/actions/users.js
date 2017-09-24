import Config from 'react-native-config';
import { AUTHENTICATE_SUCCESS, REGISTER_SUCCESS } from './actions';
import { api } from '../config/client';
import store from 'react-native-simple-store';

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
    api.post('/oauth/token',
    {
      client_id: Config.CLIENT_ID,
      client_secret: Config.CLIENT_SECRET,
      grant_type : 'password',
      username: email,
      password: password,
    }).then((res) => {
      store.update('tokens', res.data);
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
