import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner'
import Comments from './Comments';
import History from '../history'


const GroupShow = ({ match, fetchGroup, onEdit, onDelete, commentArr,
                  requesting }) => {

  const { id } = useParams();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [userId, setUserId] = useState('');
  const [error, setError] = useState('');


  useEffect( () => {
    // similar to componentDidMount, will fetch data with first render
    const fetchData = async () => {
      const result = await fetchGroup(id);

      setName(result.name);
      setDescription(result.description);
      setUserId(result.user_id);
    };

    fetchData();
  }, [fetchGroup, id]);

  const renderError = () => {
    if (error) {
      return <Alert variant="danger">{error}</Alert>
    }
  }

  const renderLoading = () => {
    if (requesting) {
      return <Spinner animation="border" variant="light" />
    }
  }

  const renderEdit = () => {
    // only render edit button if the user created the group
    if (parseInt(localStorage.getItem('userId'), 10) === userId) {
      return (
        <Link to={`/groups/${id}/edit`}>
          <Button variant="outline-secondary" size="sm">Edit</Button>
        </Link>
      )
    }
  }

  const renderDelete = () => {
    // only render delete button if the user created the group
    if (parseInt(localStorage.getItem('userId'), 10) === userId) {
      return (
        <Button onClick={e => handleDelete(e)} variant="outline-secondary" size="sm">
          Delete
        </Button>
      )
    }
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    const result = await onDelete(id);
    // redirect if no error, otherwise set error
    (!result.error) ? History.push('/groups') : setError(result.error)
  }

  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      {renderLoading()}
      {renderError()}
      {renderEdit()}
      {renderDelete()}
      <Comments commentArr={commentArr}/>
    </div>
  );
};

export default GroupShow;
