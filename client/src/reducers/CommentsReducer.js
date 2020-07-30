const commentsReducer = (
  state = { comments: [] },
  action
) => {
  switch(action.type) {
    case 'CREATE_COMMENT':
      console.log(action.type);
      return state;
    default:
      return state;
  }
}

export default commentsReducer;
