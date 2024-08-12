import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
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
      <div className="text-center my-4">
        <Link href="/category/new" passHref>
          <Button>Add A Category</Button>
        </Link>
      </div>
      {categories.map((category) => (
        <CategoryCard key={category.id} categoryObj={category} />
      ))}
    </div>
  );
}
