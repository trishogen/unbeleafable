const rootReducer = (
  state = { jwt: '' },
  action
) => {
  switch(action.type) {
    case 'USER_AUTH':
      return {
        ...state,
        jwt: action.jwt
      }
    default:
      return state;
  }
}

export default rootReducer;
