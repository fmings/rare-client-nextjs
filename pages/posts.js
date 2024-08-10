import React, { useEffect, useState } from 'react';
import PostCard from '../components/posts/PostCard';
import getPosts from '../api/postsData';
import FilterPostsByCategory from '../components/FilterPostsByCategory';
import { filterPostByCategory } from '../api/categoriesData';
// import { getAllCategories } from '../api/categoriesData';

export default function ViewAllPosts() {
  const [posts, setPosts] = useState([]);

  const getAllPosts = () => {
    getPosts().then(setPosts);
  };

  const filter = (id) => {
    const decodedId = decodeURIComponent(id);
    filterPostByCategory(decodedId).then(setPosts);
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div>
      <div>
        <FilterPostsByCategory filterCategoryFunc={filter} filterAll={getAllPosts} />
      </div>
      <div className="d-flex flex-wrap">
        {posts.map((post) => (
          <PostCard postObj={post} key={post.id} onUpdate={getAllPosts} />
        ))}
      </div>
    </div>
  );
}
