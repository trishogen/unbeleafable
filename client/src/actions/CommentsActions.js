import { parseResp, HEADERS } from './actionsHelpers';


export const fetchComments = () => {
  return (dispatch) => {
    dispatch({ type: 'START_COMMENTS' });
    fetch('http://localhost:3000/api/v1/comments', {
      method: "GET",
      headers: HEADERS
    })
    .then(resp => parseResp(resp))
    .then( ({status, json} ) => {
      if (status >= 400) {
        throw new Error(json.error);
      } else {
        return dispatch({ type: 'GET_COMMENTS', comments: json });
      }
    })
    .catch(error => {
      return {error: error.message}
    })
  }
}

export const createNewComment = (groupId, comment) => {
  return (dispatch) => {
    dispatch({ type: 'START_COMMENTS' });
    return fetch(`http://localhost:3000/api/v1/groups/${groupId}/comments`, {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify(comment)
    })
    .then(resp => parseResp(resp))
    .then( ({status, json}) => {
      if (status >= 400) {
        throw new Error(json.error);
      } else {
        return dispatch({ type: 'CREATE_COMMENT', comment: json });
      }
    })
    .catch(error => {
      return {error: error.message}
    })
  }
}
