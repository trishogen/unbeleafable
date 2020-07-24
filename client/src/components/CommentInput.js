import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import History from '../history'


const CommentInput = ({ onSubmit }) => {
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const { id } = useParams();

  const comment = () => {return {text: text}}

  const handleSubmitNewComment = async (e, comment) => {
    e.preventDefault();
    const result = await onSubmit(comment);
    // redirect if no error, otherwise set error
    (!result.error) ? History.push(`/groups/${id}`) : setError(result.error)
  }

  const renderError = () => {
    if (error) {
      return <Alert variant="danger">{error}</Alert>
    }
  }

  return (
    <div>
      <h1>New Comment</h1>
      {renderError()}
      <Form>
        <Form.Group as={Form.Row} className="justify-content-center">
          <Col sm={2}>
          <Form.Control
            as="textarea"
            name="text"
            placeholder="enter your comment here"
            value={text}
            onChange={e => setText(e.target.value)}
            rows="3"/>
          </Col>
        </Form.Group>

        <Button variant="outline-secondary" size="sm" type="submit"
          onClick={e => handleSubmitNewComment(e, comment())}>
          Reply
        </Button>
      </Form>
    </div>
  );
};

export default CommentInput;
