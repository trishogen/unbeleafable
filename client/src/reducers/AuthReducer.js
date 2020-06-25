const authReducer = (
  state = { loggedIn: false, errorMessage: ''},
  action
) => {
  switch(action.type) {
    case 'USER_AUTH':
      return {
        ...state,
        loggedIn: true,
        errorMessage: '' // reset in case of previous failed attempts
      }
      case 'USER_RETURN':
        return {
          ...state,
          loggedIn: true
        }
      case 'AUTH_ERROR':
        return {
          ...state,
          errorMessage: action.message
        }
    case 'LOGOUT':
      return { ...state, loggedIn: false }
    default:
      return state;
  }
}

export default authReducer;
