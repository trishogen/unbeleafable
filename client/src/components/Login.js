import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import History from '../history'


const Login = ({ handleSubmit }) => {
  // set state in a functional component
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const user = () => {return {user: {username: username, password: password}}}

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
      <h1>Login</h1>
      {renderError()}
      <Form>
        <Form.Group as={Form.Row} className="justify-content-center">
          <Form.Label column sm={2}>Username</Form.Label>
          <Col sm={2}>
          <Form.Control
            type="text"
            name="username"
            placeholder="username"
            value={username}
            onChange={e => setUsername(e.target.value)}/>
          </Col>
        </Form.Group>

        <Form.Group as={Form.Row} className="justify-content-center">
          <Form.Label column sm={2}>Password</Form.Label>
          <Col sm={2}>
          <Form.Control
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={e => setPassword(e.target.value)}/>
          </Col>
        </Form.Group>
        <Button variant="outline-secondary" size="sm" type="submit" onClick={e => onSubmit(e, user())}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
