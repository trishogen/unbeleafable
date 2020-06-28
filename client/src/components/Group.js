import React from 'react';
import Button from 'react-bootstrap/Button';


const Group = ({ name, id, description, userId, onDelete }) => {

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
      <h2> {name} </h2>
      <p> {description} </p>
      {renderDelete()}
    </div>
  );
};

export default Group;
