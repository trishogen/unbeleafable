const commentsReducer = (
  state = { comments: [], requesting: false },
  action
) => {
  switch(action.type) {
    case 'STARTING_COMMENTS':
      return {...state, comments: [...state.comments], requesting: true}
    case 'GET_COMMENTS':
      return {...state, comments: action.comments, requesting: false}
    case 'CREATE_COMMENT':
      return {
        ...state, comments:
        [...state.comments, action.comment],
        requesting: false}
    default:
      return state;
  }
}

export default commentsReducer;
