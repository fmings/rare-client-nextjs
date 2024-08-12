import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleUser } from '../../api/userData';

export default function ViewUser() {
  const [userDetails, setUserDetails] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    console.warn(id);
    if (id) {
      getSingleUser(id).then(setUserDetails);
    }
  }, [id]);

  if (!userDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{userDetails.user?.firstName} {userDetails.user?.lastName}</h1>
      <h6>{userDetails.Email}</h6>
      <h6>{userDetails.Bio}</h6>
      <img width="500" alt="header" src={userDetails.ProfileImageUrl} />
    </div>
  );
}
