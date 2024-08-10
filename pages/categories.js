import React, { useEffect, useState } from 'react';
import { getAllCategories } from '../api/categoriesData';
import CategoryCard from '../components/CategoriesCard';

export default function Categories() {
  const [categories, setCategories] = useState([]);

  const getAllTheCategories = () => {
    getAllCategories().then(setCategories);
  };

  useEffect(() => {
    getAllTheCategories();
  }, []);

  return (
    <div>
      {categories.map((category) => (
        <CategoryCard key={category.id} categoryObj={category} />
      ))}
    </div>
  );
}
