import React, { useEffect, useState } from 'react';
import UserCard from '../../components/UserCard';
import { getAllUsers } from '../../api/userData';

export default function ViewAllUsers() {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    getAllUsers().then(setUsers);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <div className="d-flex flex-wrap">
        {users.map((user) => (
          <UserCard userObj={user} key={user.id} onUpdate={getUsers} />
        ))}
      </div>
    </div>
  );
}
