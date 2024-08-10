import { Dropdown } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { getAllCategories } from '../api/categoriesData';

export default function FilterPostsByCategory() {
  const [categories, setCategories] = useState([]);

  const getAllTheCategories = () => {
    getAllCategories().then(setCategories);
  };

  useEffect(() => {
    getAllTheCategories();
  }, []);

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">Search by Category</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>
            All
          </Dropdown.Item>
          <Dropdown.Item>
            {
            categories.map((category) => (
              <Dropdown.Item
                key={category.id}
                value={category.id}
                // onClick={() => filterCategoryFunc(category.id)}
              >{category.label}
              </Dropdown.Item>
            ))
          }
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

// FilterPostsByCategory.propTypes = {
//   filterCategoryFunc: PropTypes.func.isRequired,
// };
