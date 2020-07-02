import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import History from '../history'


const Signup = ({ handleSubmit, errorMessage}) => {
  // set state in a functional component
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [error, setError] = useState('');

  const user = () => ({
    user: {
      username: username,
      password: password,
      password_confirmation: passwordConfirmation
    }
  })

  const renderError = () => {
    if (error) {
      return <Alert variant="danger">{error}</Alert>
    }
  }

  const onSubmit = async (e, user) => {
    e.preventDefault();
    const result = await handleSubmit(user);
    // redirect if no error, otherwise set error
    (!result.error) ? History.push('/') : setError(result.error)
  }

  return (
    <div>
      <h1>Sign Up</h1>
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
        Confirm Password:
        <input
          type="password"
          name="passwordConfirmation"
          value={passwordConfirmation}
          onChange={e => setPasswordConfirmation(e.target.value)}/>
        <br />
        <input
          type="submit"
          value="Sign up"
          onClick={e => onSubmit(e, user())}/>
      </form>
    </div>
  );
};

export default Signup;
