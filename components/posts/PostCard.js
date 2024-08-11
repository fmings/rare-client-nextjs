import React from 'react';
import { Button, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { deletePost } from '../../api/postsData';

export default function PostCard({ postObj, onUpdate }) {
  const deleteThisPost = () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      deletePost(postObj.id).then(() => onUpdate());
    }
  };

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{postObj.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{postObj.publicationDate}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">Category: {postObj.categoryId}</Card.Subtitle>
          <Card.Img className="post-image" variant="top" src={postObj.imageUrl} />
          <Card.Text>
            {postObj.content}
          </Card.Text>
          <Card.Subtitle className="mb-2 text-muted">Author: {postObj.userId}</Card.Subtitle>
          <Button className="button" variant="danger" onClick={deleteThisPost}>Delete</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

PostCard.propTypes = {
  postObj: PropTypes.shape({
    id: PropTypes.number,
    userId: PropTypes.number,
    categoryId: PropTypes.number,
    title: PropTypes.string,
    publicationDate: PropTypes.instanceOf(Date),
    imageUrl: PropTypes.string,
    content: PropTypes.string,
    approved: PropTypes.bool,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
