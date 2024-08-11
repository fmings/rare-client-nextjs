import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import viewPostDetails from '../../api/mergedData';

export default function ViewPost() {
  const [postDetails, setPostDetails] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    console.warn(id);
    if (id) {
      viewPostDetails(id).then(setPostDetails);
    }
  }, [id]);

  if (!postDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{postDetails.title}</h1>
      <h6>{postDetails.user?.firstName} {postDetails.user?.lastName}</h6>
      <h6>{postDetails.publicationDate}</h6>
      <img width="500" alt="header" src={postDetails.imageUrl} />
      <h3>{postDetails.content}</h3>
    </div>
  );
}
