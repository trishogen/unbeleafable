import React, { useState } from 'react';
import {
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";


const Login = () => {
  // set state in a functional component
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const handleSubmit = (e) => {
    // TODO: move this to a container
    e.preventDefault();
    authenticate();
  }

  const authenticate = () => {
    // TOOD: move this to a container
    // TODO: make base url a const
    return fetch(`http://localhost:3000/api/v1/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({user: {username: username, password: password}})
    })
    .then(res => res.json())
    .then((response) => {
      console.log(response);
      // TODO: store token in store
      history.replace(from);
    });
  }

  return (
    <div>
      <h1>Login</h1>
      <form>
        Username:
        <input
          type="text"
          name="username"
          value={username}
          onChange={e => setUsername(e.target.value)}/>
        <br />
        Password:
        <input
          type="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}/>
        <br />
        <input
          type="submit"
          value="Log in"
          onClick={handleSubmit}/>
      </form>
    </div>
  );
};

export default Login;
