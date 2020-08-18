const commentsReducer = (
  state = { comments: [], requestingComments: false },
  action
) => {
  switch(action.type) {
    case 'STARTING_COMMENTS':
      return {...state, comments: [...state.comments], requestingComments: true}
    case 'GET_COMMENTS':
      return {...state, comments: action.comments, requestingComments: false}
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
