export const users = (state = 0, action) => {
  switch (action.type) {
    case 'AUTHENTICATE_SUCCESS':
        return action.users;
    case 'REGISTER_SUCCESS':
        return action.users;
    default:
        return state;
  }
};
