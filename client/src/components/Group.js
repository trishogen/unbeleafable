import React from 'react';
import Button from 'react-bootstrap/Button';


const Group = ({ name, id, description, onDelete }) => {

  return (
    <div>
      <h2> {name} </h2>
      <p> {description} </p>
      <Button onClick={() => onDelete(id)} variant="outline-secondary" size="sm">
        Delete
      </Button>
    </div>
  );
};

export default Group;
