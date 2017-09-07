import { GET_EXPENSE_SUCCESS, GET_EXPENSES_SUCCESS } from './actions';
import apiClient from '../config/client.js';

//Sends data to reducer with this action
export const getExpenseSuccess = (expense) => {
  return {
    type: GET_EXPENSE_SUCCESS,
    expense
  }
}

export const getExpensesSuccess = (expenses) => {
  console.log(expenses)
  return {
    type: GET_EXPENSES_SUCCESS,
    expenses
  }
}

//Our function that is initiated from the GUI
export function getExpenses() {
  return dispatch => {
    let data = {
      expenses : [
        {
          id: 1,
          expense: 'Phone Bill',
          type: 'Direct Debit',
          account: 'Current Account',
          recipient: 'GloboDex',
          amount: 20.00,
          date: '2017-08-28',
          recurring_date: 27,
          user_id: 1
        },
        {
          id: 2,
          expense: 'Dinner with GF',
          type: 'Payment',
          account: 'Current Account',
          recipient: 'Wagamamma',
          amount: 45.50,
          date: '2017-08-30',
          recurring_date: 0,
          user_id: 1
        }
      ]
    };
    dispatch(getExpensesSuccess(data.expenses))
  }
}

export function getExpense() {
  return dispatch => {
    let data = {
      expense : {
        id: 1,
        expense: 'Phone Bill',
        type: 'Direct Debit',
        account: 'Current Account',
        recipient: 'GloboDex',
        amount: 20.00,
        date: '2017-08-28',
        recurring_date: 27,
        user_id: 1
      }
    }
    dispatch(getExpenseSuccess(data.expense))
  }
}
