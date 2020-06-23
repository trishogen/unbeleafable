import React from 'react';
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
      <div>{groups}</div>
    </div>
  )
}

export default Groups