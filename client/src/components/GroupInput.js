import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import History from '../history'


const GroupInput = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const group = () => {return {name: name, description: description}}

  const handleSubmitNewGroup = async (e, group) => {
    e.preventDefault();
    const result = await onSubmit(group);
    // redirect if no error, otherwise set error
    (!result.error) ? History.push('/groups') : setError(result.error)
  }

  const renderError = () => {
    if (error) {
      return <Alert variant="danger">{error}</Alert>
    }
  }

  return (
    <div>
      <h1>New Group</h1>
      {renderError()}
      <Form>
        <Form.Group as={Form.Row} className="justify-content-center">
          <Form.Label column sm={2}>Name</Form.Label>
          <Col sm={2}>
          <Form.Control
            type="text"
            name="name"
            placeholder="enter a name for this group"
            value={name}
            onChange={e => setName(e.target.value)}/>
          </Col>
        </Form.Group>

        <Form.Group as={Form.Row} className="justify-content-center">
          <Form.Label column sm={2}>Description</Form.Label>
          <Col sm={2}>
          <Form.Control
            as="textarea"
            name="description"
            placeholder="enter a group description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            rows="3"/>
          </Col>
        </Form.Group>

        <Button variant="outline-secondary" size="sm" type="submit"
          onClick={e => handleSubmitNewGroup(e, group())}>
          Create
        </Button>
      </Form>
    </div>
  );
};

export default GroupInput;
