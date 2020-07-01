const groupsReducer = (
  state = { groups: [] },
  action
) => {
  switch(action.type) {
    case 'GET_GROUPS':
      return { ...state, groups: action.groups}
    case 'CREATE_GROUP':
      return { ...state, groups: [...state.groups, action.group ]}
    case 'EDIT_GROUP':
      const editedGroups = state.groups.map(g => {
        return (g.id === action.group.id) ? action.group : g
      });
      return { ...state, groups: editedGroups}
    case 'DELETE_GROUP':
      const updatedGroups = state.groups.filter(g => g.id !== action.groupId);
      return { ...state, groups: updatedGroups}
    default:
      return state;
  }
}

export default groupsReducer;
