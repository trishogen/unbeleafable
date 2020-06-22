import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';


const GroupInput = ({ onSubmit, error, errorMessage }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const group = () => {return {group: {name: name, description: description}}}

  const renderError = () => {
    if (error) {
      return <Alert variant="danger">{errorMessage}</Alert>
    }
  }

  return (
    <div>
      <h1>New Group</h1>
      {renderError()}
      <form>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}/>
        <br />
        Description:
        <input
          type="text"
          name="description"
          value={description}
          onChange={e => setDescription(e.target.value)}/>
        <br />
        <input
          type="submit"
          value="Create"
          onClick={e => onSubmit(e, group())}/>
      </form>
    </div>
  );
};

export default GroupInput;
