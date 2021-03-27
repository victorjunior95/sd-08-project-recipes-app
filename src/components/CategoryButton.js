import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export default function CategoryButton({ categories }) {
  const { strCategory } = categories;

  return (
    // <Link to={ `comidas/${idMeal} ` }>
    <button
      type="button"
      data-testeid={ `${strCategory}-category-filter` }
    >
      { strCategory }
    </button>
    // </Link>
  );
}

CategoryButton.propTypes = {
  categories: PropTypes.shape({
    strCategory: PropTypes.string.isRequired,
  }).isRequired,
};
