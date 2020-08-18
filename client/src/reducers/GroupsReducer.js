const groupsReducer = (
  state = { groups: [], requestingGroups: false },
  action
) => {
  switch(action.type) {
    case 'START_GROUPS':
      return {...state, groups: [...state.groups], requesting: true}
    case 'GET_GROUPS':
      return { ...state, groups: action.groups, requesting: false }
    case 'CREATE_GROUP':
      return {
        ...state,
        groups: [...state.groups, action.group ],
        requesting: false
      }
    case 'EDIT_GROUP':
      const editedGroups = state.groups.map(g => {
        return (g.id === action.group.id) ? action.group : g
      });
      return { ...state, groups: editedGroups, requesting: false}
    case 'DELETE_GROUP':
      const updatedGroups = state.groups.filter(g => g.id !== parseInt(action.groupId));
      return { ...state, groups: updatedGroups, requesting: false}
    default:
      return state;
  }
}

export default groupsReducer;
