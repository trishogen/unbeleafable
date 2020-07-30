import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const Comments = ({ commentArr }) => {

  const { id } = useParams();

  const comments = commentArr.map(c => (
    <p key={c.id}>{c.text}</p>
    )
  );

  return (
    <div>
      {comments}
      <Link to={`/groups/${id}/comments/new`}>
        <Button variant="outline-secondary" size="sm">Comment</Button>
      </Link>
    </div>
  )
}

export default Comments
