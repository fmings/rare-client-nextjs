import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function UserCard({ userObj }) {
  return (
    <Card style={{ width: '16rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title>{userObj.username}</Card.Title>
      </Card.Body>
    </Card>
  );
}

UserCard.propTypes = {
  userObj: PropTypes.shape({
    username: PropTypes.string,
  }).isRequired,
};

export default UserCard;
