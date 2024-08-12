import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { getSingleUser } from '../api/userData';

function UserCard({ userObj }) {
  // Load the initial state from localStorage or use the default from userObj
  const [active, setActive] = useState(() => {
    const savedStatus = localStorage.getItem(`user-${userObj.username}-active`);
    return savedStatus !== null ? JSON.parse(savedStatus) : userObj.active || false;
  });

  // Save the state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(`user-${userObj.username}-active`, JSON.stringify(active));
  }, [active, userObj.username]);

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
        <Button className="button" variant="danger" onClick={getSingleUser}>Delete</Button>
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
