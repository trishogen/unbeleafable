import React, { useState } from 'react';


const Login = ({ handleSubmit }) => {
  // set state in a functional component
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const user = () => {return {user: {username: username, password: password}}}

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
          onClick={e => handleSubmit(e, user())}/>
      </form>
    </div>
  );
};

export default Login;
