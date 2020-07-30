import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const Group = ({ name, id, description }) => {

  return (
    <div>
      <h2> <Link className="link" to={`/groups/${id}`}>{name}</Link></h2>
      <p> {description} </p>
    </div>
  );
};

export default Group;
