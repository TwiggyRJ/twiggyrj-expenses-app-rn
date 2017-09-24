import { GET_EXPENSE_SUCCESS, GET_EXPENSES_SUCCESS } from './actions';
import store from 'react-native-simple-store';

//Sends data to reducer with this action
export const getExpenseSuccess = (expense) => {
  return {
    type: GET_EXPENSE_SUCCESS,
    expense
  }
}

export const getExpensesSuccess = (expenses) => {
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
        },
        {
          id: 3,
          expense: 'Train Fare to Bristol',
          type: 'Payment',
          account: 'Current Account',
          recipient: 'Network Rail',
          amount: 24.50,
          date: '2017-09-02',
          recurring_date: 0,
          user_id: 1
        },
        {
          id: 4,
          expense: 'Lunch',
          type: 'Payment',
          account: 'Current Account',
          recipient: 'McDonalds',
          amount: 6.75,
          date: '2017-09-05',
          recurring_date: 0,
          user_id: 1
        },
        {
          id: 5,
          expense: 'Groceries',
          type: 'Payment',
          account: 'Current Account',
          recipient: 'Asda',
          amount: 23.91,
          date: '2017-09-07',
          recurring_date: 0,
          user_id: 1
        },
        {
          id: 6,
          expense: 'Sonic Mania',
          type: 'Payment',
          account: 'Current Account',
          recipient: 'Sony PSN',
          amount: 15.00,
          date: '2017-09-10',
          recurring_date: 0,
          user_id: 1
        },
        {
          id: 7,
          expense: 'Wages',
          type: 'Income',
          account: 'Current Account',
          recipient: 'Aaron Freyr',
          amount: 1000.00,
          date: '2017-09-26',
          recurring_date: 26,
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
