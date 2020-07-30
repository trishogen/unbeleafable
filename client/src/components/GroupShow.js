import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Comments from './Comments';


const GroupShow = ({ match, fetchGroup, onEdit, onDelete }) => {

  const { id } = useParams();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [comments, setComments] = useState([]);
  const [userId, setUserId] = useState('');


  useEffect( () => {
    // similar to componentDidMount, will fetch data with first render
    const fetchData = async () => {
      const result = await fetchGroup(id);

      setName(result.name);
      setDescription(result.description);
      setComments(result.comments);
      setUserId(result.user_id);
    };

    fetchData();
  }, [fetchGroup, id]);

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
        <Button onClick={() => onDelete(id)} variant="outline-secondary" size="sm">
          Delete
        </Button>
      )
    }
  }

  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      {renderEdit()}
      {renderDelete()}
      <Comments commentArr={comments}/>
    </div>
  );
};

export default GroupShow;
