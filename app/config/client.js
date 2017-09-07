import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const apiClient = {
  clientId: '3',
  clientSecret: 'klQVZFUCYh4OqDdfuXw5qpTjClDRWNVsrqJfiaaO',
  accessTokenUri: 'http://192.168.0.47/~aaron/ExpensesWebApp/public/oauth/token',
  authorizationUri: '',
  redirectUri: '',
  scopes: []
};

export const api = axios.create({
  baseURL: 'http://192.168.0.47/~aaron/ExpensesWebApp/public/',
  headers: {
    'Content-Type' : 'application/json',
    'Accept' : 'application/json',
  }
});

export const credentials = {
  client_id: '3',
  client_secret: 'klQVZFUCYh4OqDdfuXw5qpTjClDRWNVsrqJfiaaO',
}
