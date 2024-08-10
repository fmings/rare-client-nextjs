import React from 'react';
import { ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
// import { getAllCategories } from '../api/categoriesData';
// import { Card, CardText } from 'react-bootstrap';

export default function CategoryCard({ categoryObj }) {
  return (
    <ListGroup>
      <ListGroup.Item>
        {categoryObj.label}
      </ListGroup.Item>
    </ListGroup>
  );
}

CategoryCard.propTypes = {
  categoryObj: PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string,
  }).isRequired,
  // onUpdate: PropTypes.func.isRequired,
};
