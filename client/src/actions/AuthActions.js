export const login = (user) => {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
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
        localStorage.setItem('token', json.jwt);
        localStorage.setItem('userId', json.user.user.id);
        return dispatch({ type: 'USER_AUTH'});
      }
    })
    .catch(error => {
      return {error: error.message}
    })
  }
}


export const signup = (user) => {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/v1/signup', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
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
        localStorage.setItem('token', json.jwt);
        localStorage.setItem('userId', json.user.user.id);
        return dispatch({ type: 'USER_AUTH'});
      }
    })
    .catch(error => {
      return {error: error.message}
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
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    dispatch({ type: 'LOGOUT' });
  }
}
