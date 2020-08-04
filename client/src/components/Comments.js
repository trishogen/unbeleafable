import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link, useParams } from 'react-router-dom';


const Comments = ({ commentArr }) => {

  const { id } = useParams();

  // filter down to the comments for this group
  const filteredComments = commentArr.filter(c => c.group_id === parseInt(id));
  const comments = filteredComments.map(c => (
    <div key={c.id}>
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
