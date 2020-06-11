export const login = (user) => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
    .then(resp => {
      return resp.json()
    }).then(respJson => {
      dispatch({ type: 'USER_AUTH', jwt: respJson.jwt })
    })
  }
}
