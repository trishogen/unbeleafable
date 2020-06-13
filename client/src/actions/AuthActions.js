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
      if (resp.ok) {
        resp.json()
        .then(respJson => {
          localStorage.setItem("token", respJson.jwt);
          dispatch({ type: 'USER_AUTH'});
        })
      } else {
          resp.json()
          .then(respJson => {
            dispatch({ type: 'AUTH_ERROR', message: respJson.message });
          })
        }
      })
  }
}

export const setLoggedIn = () => {
  // sets loggedIn to true in store
  return (dispatch) => {
    if (localStorage.token) dispatch({ type: 'USER_RETURN' });
  }
}

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem("token");
    dispatch({ type: 'LOGOUT' });
  }
}
