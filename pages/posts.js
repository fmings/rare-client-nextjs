import React, { useEffect, useState } from 'react';
import PostCard from '../components/posts/PostCard';
import getPosts from '../api/postsData';
import FilterPostsByCategory from '../components/FilterPostsByCategory';
// import { getAllCategories } from '../api/categoriesData';

export default function ViewAllPosts() {
  const [posts, setPosts] = useState([]);
  // const [searchResults, setSearchResults] = useState([]);

  const getAllPosts = () => {
    getPosts().then(setPosts);
  };

  // const getAllTheCategories = () => {
  //   getAllCategories();
  // };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div>
      <FilterPostsByCategory />
      <div className="d-flex flex-wrap">
        {posts.map((post) => (
          <PostCard postObj={post} key={post.id} onUpdate={getAllPosts} />
        ))}
      </div>
    </div>
  );
}
