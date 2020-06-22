import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';


const Login = ({ handleSubmit, error, errorMessage}) => {
  // set state in a functional component
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const user = () => {return {user: {username: username, password: password}}}

  const renderError = () => {
    if (error) {
      return <Alert variant="danger">{errorMessage}</Alert>
    }
  }

  return (
    <div>
      <h1>Login</h1>
      {renderError()}
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
