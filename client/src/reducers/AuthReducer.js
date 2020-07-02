const authReducer = (
  state = { loggedIn: false },
  action
) => {
  switch(action.type) {
    case 'USER_AUTH':
      return {
        ...state,
        loggedIn: true
      }
      case 'USER_RETURN':
        return {
          ...state,
          loggedIn: true
        }
    case 'LOGOUT':
      return { ...state, loggedIn: false }
    default:
      return state;
  }
}

export default authReducer;
