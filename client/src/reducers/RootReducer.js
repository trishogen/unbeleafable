const rootReducer = (
  state = { jwt: '', redirect: false, error: false, errorMessage: ''},
  action
) => {
  switch(action.type) {
    case 'USER_AUTH':
      return {
        ...state,
        jwt: action.jwt,
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
      return { jwt: '', redirect: true }
    default:
      return state;
  }
}

export default rootReducer;
