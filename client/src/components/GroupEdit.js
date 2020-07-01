import React, { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import { useParams } from 'react-router-dom';
import History from '../history'


const GroupEdit = ({ match, fetchGroup, onEdit }) => {

  const { id } = useParams();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  useEffect( () => {
    // similar to componentDidMount, will fetch data with first render
    const fetchData = async () => {
      const result = await fetchGroup(id);

      setName(result.name);
      setDescription(result.description);
    };

    fetchData();
  }, [fetchGroup, id]);

  let group = {id: id, name: name, description: description}

  const handleEditGroup = async (e, group) => {
    e.preventDefault();
    const result = await onEdit(group);
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
      <h1>Edit Group</h1>
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
          value="Save"
          onClick={e => handleEditGroup(e, group)}/>
      </form>
    </div>
  );
};

export default GroupEdit;
