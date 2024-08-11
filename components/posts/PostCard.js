import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Link from 'next/link';

export default function PostCard({ postObj }) {
  return (
    <div>
      {console.warn(postObj)}
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Link passHref href={`/post/${postObj.id}`}>
            <Card.Title>{postObj.title}</Card.Title>
          </Link>
          <Card.Subtitle className="mb-2 text-muted">{postObj.publicationDate}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">Category: {postObj.category.label}</Card.Subtitle>
          <Card.Img className="post-image" variant="top" src={postObj.imageUrl} />
          <Card.Text>
            {postObj.content}
          </Card.Text>
          <Card.Subtitle className="mb-2 text-muted">Author: {postObj.user.firstName} {postObj.user.lastName}</Card.Subtitle>
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
    category: PropTypes.shape({
      label: PropTypes.string,
    }),
    user: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
    }),
  }).isRequired,
};
