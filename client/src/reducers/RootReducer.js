const rootReducer = (
  state = { loggedIn:false, redirect: false, error: false, errorMessage: ''},
  action
) => {
  switch(action.type) {
    case 'USER_AUTH':
      return {
        ...state,
        loggedIn: true,
        redirect: true,
        error: false, // reset in case of previous failed attempts
        errorMessage: ''
      }
      case 'AUTH_ERROR':
        return {
          ...state,
          error: true,
          errorMessage: action.message
        }
    case 'LOGOUT':
      return { ...state, loggedIn: false, redirect: false }
    default:
      return state;
  }
}

export default rootReducer;
