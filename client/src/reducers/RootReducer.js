const rootReducer = (
  state = { jwt: '', redirect: false },
  action
) => {
  switch(action.type) {
    case 'USER_AUTH':
      return {
        ...state,
        jwt: action.jwt,
        redirect: true
      }
    case 'LOGOUT':
      return { jwt: '', redirect: false }
    default:
      return state;
  }
}

export default rootReducer;
