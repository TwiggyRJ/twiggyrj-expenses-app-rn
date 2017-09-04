export const expenses = (state = 0, action) => {
  switch (action.type) {
    case 'GET_EXPENSES_SUCCESS':
        return action.expenses;
    default:
        return state;
  }
};
