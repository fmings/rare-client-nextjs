import React, { useEffect, useState } from 'react';
import UserCard from '../../components/UserCard';
import getAllUser from '../../api/userData';

export default function ViewAllUsers() {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    getAllUser().then(setUsers);
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
