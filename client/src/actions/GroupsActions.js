export const fetchGroups = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/groups', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.token}`
      }
    })
    .then(resp => {
      if (resp.ok) {
        resp.json()
        .then(respJson => {
          dispatch({ type: 'GET_GROUPS', groups: respJson });
        })
      } else {
        resp.json()
        .then(respJson => {
          dispatch({ type: 'GROUPS_ERROR', message: respJson.error });
        })
      }
    })
  }
}


export const createNewGroup = (group) => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/groups', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.token}`
      },
      body: JSON.stringify(group)
    })
    .then(resp => {
      if (resp.ok) {
        resp.json()
        .then(respJson => {
          dispatch({ type: 'CREATE_GROUP', group: respJson });
        })
      } else {
        resp.json()
        .then(respJson => {
          dispatch({ type: 'GROUPS_ERROR', message: respJson.error });
        })
      }
    })
  }
}


export const deleteGroup = (groupId) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/groups/${groupId}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${localStorage.token}`
      },
      body: {}
    })
    .then(resp => {
      if (resp.ok) {
        dispatch({ type: 'DELETE_GROUP', groupId: groupId });
      } else {
        resp.json()
        .then(respJson => {
          dispatch({ type: 'GROUPS_ERROR', message: respJson.error });
        })
      }
    })
  }
}
