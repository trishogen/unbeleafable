import { parseResp, HEADERS } from './actionsHelpers';


export const fetchGroups = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/groups', {
      method: "GET",
      headers: HEADERS
    })
    .then(resp => parseResp(resp))
    .then( ({status, json} ) => {
      if (status >= 400) {
        throw new Error(json.error);
      } else {
        return dispatch({ type: 'GET_GROUPS', groups: json });
      }
    })
    .catch(error => {
      return {error: error.message}
    })
  }
}

export const fetchGroup = (groupId) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/groups/${groupId}`, {
      method: "GET",
      headers: HEADERS
    })
    .then(resp => (resp.json()))
  }
}

export const createNewGroup = (group) => {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/v1/groups', {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify(group)
    })
    .then(resp => parseResp(resp))
    .then( ({status, json}) => {
      if (status >= 400) {
        throw new Error(json.error);
      } else {
        return dispatch({ type: 'CREATE_GROUP', group: json });
      }
    })
    .catch(error => {
      return {error: error.message}
    })
  }
}


export const editGroup = (group) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/groups/${group.id}`, {
      method: "PUT",
      headers: HEADERS,
      body: JSON.stringify(group)
    })
    .then(resp => parseResp(resp))
    .then( ({status, json}) => {
      if (status >= 400) {
        throw new Error(json.error);
      } else {
        return dispatch({ type: 'EDIT_GROUP', group: json });
      }
    })
    .catch(error => {
      return {error: error.message}
    })
  }
}


export const deleteGroup = (groupId) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/groups/${groupId}`, {
      method: "DELETE",
      headers: HEADERS
    })
    .then(resp =>  {
      if (resp.status >= 400) {
        // convert to json here, because if there's no error it returns no content
        throw new Error(resp.json().error);
      } else {
        return dispatch({ type: 'DELETE_GROUP', groupId: groupId })
      }
    })
    .catch(error => {
      return {error: error.message}
    })
  }
}
