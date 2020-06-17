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
          dispatch({ type: 'GET_GROUPS', groups: respJson.groups});
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
