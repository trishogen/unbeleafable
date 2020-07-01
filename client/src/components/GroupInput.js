import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import History from '../history'


const GroupInput = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const group = () => {return {name: name, description: description}}

  const handleSubmitNewGroup = async (e, group) => {
    e.preventDefault();
    const result = await onSubmit(group);
    // redirect if no error, otherwise set error
    (!result.error) ? History.push('/groups') : setError(result.error)
  }

  const renderError = () => {
    if (error) {
      return <Alert variant="danger">{error}</Alert>
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
          onClick={e => handleSubmitNewGroup(e, group())}/>
      </form>
    </div>
  );
};

export default GroupInput;
