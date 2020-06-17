const groupsReducer = (
  state = [],
  action
) => {
  switch(action.type) {
    case 'GET_GROUPS':
      console.log(action.groups);
      return action.groups
    default:
      return state;
  }
}

export default groupsReducer;
