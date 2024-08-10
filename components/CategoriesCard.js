import React from 'react';
import { ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';

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
