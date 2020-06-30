export const fetchGroups = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/groups', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.token}`
      }
    })
    .then(resp =>
      (resp.json()).then(json => ({
        status: resp.status,
        json
      })
    ))
    .then( ({status, json}) => {
      if (status >= 400) {
        throw new Error(json.error);
      } else {
        dispatch({ type: 'GET_GROUPS', groups: json });
      }
    })
    .catch(error => {
      dispatch({ type: 'GROUPS_ERROR', message: error.message });
    })
  }
}

export const fetchGroup = (groupId) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/groups/${groupId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.token}`
      }
    })
    .then(resp => (resp.json()))
  }
}

export const createNewGroup = (group) => {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/v1/groups', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.token}`
      },
      body: JSON.stringify(group)
    })
    .then(resp =>
      (resp.json()).then(json => ({
        status: resp.status,
        json
      })
    ))
    .then( ({status, json}) => {
      if (status >= 400) {
        throw new Error(json.error);
      } else {
        return dispatch({ type: 'CREATE_GROUP', group: json });
      }
    })
    .catch(error => {
      dispatch({ type: 'GROUPS_ERROR', message: error.message });
    })
  }
}


export const editGroup = (group) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/groups/${group.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.token}`
      },
      body: JSON.stringify(group)
    })
    .then(resp =>
      (resp.json()).then(json => ({
        status: resp.status,
        json
      })
    ))
    .then( ({status, json}) => {
      if (status >= 400) {
        throw new Error(json.error);
      } else {
        return dispatch({ type: 'EDIT_GROUP', group: json });
      }
    })
    .catch(error => {
      dispatch({ type: 'GROUPS_ERROR', message: error.message });
    })
  }
}


export const deleteGroup = (groupId) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/groups/${groupId}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${localStorage.token}`
      }
    })
    .then(resp =>  {
      if (resp.status >= 400) {
        // convert to json here, because if there's no error it returns no content
        throw new Error(resp.json().error);
      } else {
        dispatch({ type: 'DELETE_GROUP', groupId: groupId })
      }
    })
    .catch(error => {
      dispatch({ type: 'GROUPS_ERROR', message: error.message });
    })
  }
}
