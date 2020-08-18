import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner'
import Group from './Group';


const Groups = ({ groupArr, requestingGroups }) => {

  const groups = groupArr.map(g => (
    <Group
      key={g.id}
      id={g.id}
      name={g.name}
      description={g.description}>
    </Group>
    )
  );

  const renderLoading = () => {
    if (requestingGroups) {
      return <Spinner animation="border" variant="light" />
    }
  }

  return (
    <div>
      {renderLoading()}
      <Link to={'/groups/new'}>
        <Button variant="outline-secondary" size="sm"> Create new </Button>
      </Link>
      <div>{groups}</div>
    </div>
  )
}

export default Groups
