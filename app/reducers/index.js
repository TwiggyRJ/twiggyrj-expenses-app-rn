import { combineReducers } from 'redux';
import { expense } from './expense';
import { expenses } from './expenses';
import { users } from './users';
export default combineReducers({
  expense,
  expenses,
  users
});
