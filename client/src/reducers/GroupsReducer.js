const groupsReducer = (
  state = { groups: [], error: false, errorMessage: '' },
  action
) => {
  switch(action.type) {
    case 'GET_GROUPS':
      return { ...state, groups: action.groups }
    case 'CREATE_GROUP':
      return { ...state, groups: [...state.groups, action.group ]}
    case 'DELETE_GROUP':
      const updatedGroups = state.groups.filter(g => g.id !== action.groupId);
      return { ...state, groups: updatedGroups}
    case 'GROUPS_ERROR':
      return { ...state, error: true, errorMessage: action.message }
    default:
      return state;
  }
}

export default groupsReducer;
