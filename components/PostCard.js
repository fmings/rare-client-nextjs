import React, { useEffect, useState } from 'react';
import getAllPosts from '../api/postsData';

export default function PostCard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts().then(setPosts);
  }, []);

  return (
    <div>
      {posts.map((p) => (<h1>{p.title}</h1>))}
    </div>
  );
}
