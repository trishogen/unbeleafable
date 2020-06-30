import React, { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import { useParams } from 'react-router-dom';


const GroupEdit = ({ match, fetchGroup, onEdit, errorMessage }) => {

  const { id } = useParams();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

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

  const renderError = () => {
    if (errorMessage) {
      return <Alert variant="danger">{errorMessage}</Alert>
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
          onClick={e => onEdit(e, group)}/>
      </form>
    </div>
  );
};

export default GroupEdit;
