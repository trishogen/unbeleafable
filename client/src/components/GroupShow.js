import React, { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import { useParams } from 'react-router-dom';
import Comments from './Comments';


const GroupShow = ({ match, fetchGroup, onEdit }) => {

  const { id } = useParams();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [comments, setComments] = useState([]);


  useEffect( () => {
    // similar to componentDidMount, will fetch data with first render
    const fetchData = async () => {
      const result = await fetchGroup(id);

      console.log(result);

      setName(result.name);
      setDescription(result.description);
      setComments(result.comments);
    };

    fetchData();
  }, [fetchGroup, id]);


  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <Comments commentArr={comments}/>
    </div>
  );
};

export default GroupShow;
