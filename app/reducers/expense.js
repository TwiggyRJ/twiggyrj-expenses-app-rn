export const expense = (state = 0, action) => {
  switch (action.type) {
    case 'GET_EXPENSE_SUCCESS':
        return action.expense;
    default:
        return state;
  }
};
