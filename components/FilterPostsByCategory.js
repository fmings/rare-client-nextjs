import { Dropdown } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getAllCategories } from '../api/categoriesData';

export default function FilterPostsByCategory({ filterCategoryFunc, filterAll }) {
  const [categories, setCategories] = useState([]);

  const getAllTheCategories = async () => {
    await getAllCategories().then(setCategories);
  };

  useEffect(() => {
    getAllTheCategories();
  }, []);

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Search by Category
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => filterAll()}>
            All
          </Dropdown.Item>
          {
            categories.map((category) => (
              <Dropdown.Item
                key={category.id}
                value={category.id}
                onClick={() => filterCategoryFunc(category.id)}
              >{category.label}
              </Dropdown.Item>
            ))
          }
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

FilterPostsByCategory.propTypes = {
  filterCategoryFunc: PropTypes.func.isRequired,
  filterAll: PropTypes.func.isRequired,
};
