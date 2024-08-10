import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function PostCard({ postObj }) {
  // INSERT FUNCTION TO GET USERS/AUTHORS and CATEGORIES ONCE PROMISES ARE BUILT
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
          <Card.Link href="#">View Post</Card.Link>
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
};
