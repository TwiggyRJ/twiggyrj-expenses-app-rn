import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export const api = axios.create({
  //baseURL: 'http://192.168.0.47/~aaron/ExpensesWebApp/public/',
  baseURL: 'http://192.168.10.108/~aaron/ExpensesWebApp/public/',
  headers: {
    'Content-Type' : 'application/json',
    'Accept' : 'application/json',
  }
});
