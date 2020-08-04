const commentsReducer = (
  state = { comments: [] },
  action
) => {
  switch(action.type) {
    case 'GET_COMMENTS':
      return { ...state, comments: action.comments}
    case 'CREATE_COMMENT':
      return { ...state, comments: [...state.comments, action.comment ]}
    default:
      return state;
  }
}

export default commentsReducer;
