import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import PostCard from '../components/posts/PostCard';
import { getPosts } from '../api/postsData';

export default function ViewAllPosts() {
  const [posts, setPosts] = useState([]);

  const getAllPosts = () => {
    getPosts().then(setPosts);
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div>
      <div className="text-center my-4">
        <Link href="/post/new" passHref>
          <Button>Add Post</Button>
        </Link>
      </div>
      <div className="d-flex flex-wrap">
        {posts.map((post) => (
          <PostCard postObj={post} key={post.id} onUpdate={getAllPosts} />
        ))}
      </div>
    </div>
  );
}
