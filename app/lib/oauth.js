import localForage from "localforage";
import { api, credentials } from '../config/client';

export function getToken(email, password) {
  api.post('/oauth/token',
  {
      client_id: '3',
      client_secret: 'klQVZFUCYh4OqDdfuXw5qpTjClDRWNVsrqJfiaaO',
      grant_type : 'password',
      username: email,
      password: password,
  }).then((response) => {
    localforage.setItem('tokens', response.data).then(() => {
      console.log('Success')
      return response.data.access_token;
    });
  });
}
