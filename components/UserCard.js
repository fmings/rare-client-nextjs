import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

function UserCard({ userObj }) {
  const [active, setActive] = useState(userObj.active || false);

  const toggleActiveStatus = () => {
    setActive(!active);
  };
  return (
    <Card style={{ width: '16rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title>{userObj.username}</Card.Title>
        <Card.Text>Status: {active ? 'Active' : 'Inactive'}</Card.Text>
        <Button variant={active ? 'success' : 'secondary'} onClick={toggleActiveStatus}>
          {active ? 'Deactivate' : 'Activate'}
        </Button>
      </Card.Body>
    </Card>
  );
}

UserCard.propTypes = {
  userObj: PropTypes.shape({
    username: PropTypes.string,
    active: PropTypes.bool,
  }).isRequired,
};

export default UserCard;
