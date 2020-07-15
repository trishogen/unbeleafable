import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const Group = ({ name, id, description, userId, onDelete }) => {

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
      <h2> <Link className="link" to={`/groups/${id}`}>{name}</Link></h2>
      <p> {description} </p>
      {renderEdit()}
      {renderDelete()}
    </div>
  );
};

export default Group;
