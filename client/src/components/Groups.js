import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Group from './Group';


const Groups = ({ groupArr, onDelete }) => {

  const groups = groupArr.map(g => (
    <Group
      key={g.id}
      id={g.id}
      name={g.name}
      description={g.description}
      onDelete={onDelete}>
    </Group>
    )
  );

  return (
    <div>
      <h1>Groups</h1>
      <Link to={'/groups/new'}>
        <Button variant="outline-secondary" size="sm"> Create new </Button>
      </Link>
      <div>{groups}</div>
    </div>
  )
}

export default Groups
