import React, { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import { useParams } from 'react-router-dom';
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner'
import History from '../history'


const GroupEdit = ({ match, fetchGroup, onEdit, requestingGroups }) => {

  const { id } = useParams();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  useEffect( () => {
    // similar to componentDidMount, will fetch data with first render
    const fetchData = async () => {
      const result = await fetchGroup(id);

      setName(result.name);
      setDescription(result.description);
    };

    fetchData();
  }, [fetchGroup, id]);

  let group = {id: id, name: name, description: description}

  const handleEditGroup = async (e, group) => {
    e.preventDefault();
    const result = await onEdit(group);
    // redirect if no error, otherwise set error
    (!result.error) ? History.push(`/groups/${id}`) : setError(result.error)
  }

  const renderLoading = () => {
    if (requestingGroups) {
      return <Spinner animation="border" variant="light" />
    }
  }

  const renderError = () => {
    if (error) {
      return <Alert variant="danger">{error}</Alert>
    }
  }

  return (
    <div>
      <h1>Edit Group</h1>
      {renderLoading()}
      {renderError()}
      <Form>
        <Form.Group as={Form.Row} className="justify-content-center">
          <Form.Label column sm={2}>Name</Form.Label>
          <Col sm={2}>
          <Form.Control
            type="text"
            name="name"
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
            value={description}
            onChange={e => setDescription(e.target.value)}
            rows="3"/>
          </Col>
        </Form.Group>

        <Button variant="outline-secondary" size="sm" type="submit"
          onClick={e => handleEditGroup(e, group)}>
          Save
        </Button>
      </Form>
    </div>
  );
};

export default GroupEdit;
