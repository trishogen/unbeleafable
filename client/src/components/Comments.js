import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const Comments = ({ commentArr }) => {

  const { id } = useParams();

  const comments = commentArr.map(c => (
    <div>
      <div>{c.posted_at} by {c.posted_by}</div>
      <p>{c.text}</p>
    </div>
    )
  );

  return (
    <div>
      <Link to={`/groups/${id}/comments/new`}>
        <Button variant="outline-secondary" size="sm">Comment</Button>
      </Link>
      <div>{comments}</div>
    </div>
  )
}

export default Comments
