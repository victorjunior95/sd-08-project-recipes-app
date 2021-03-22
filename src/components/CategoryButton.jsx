import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { fetchRecipes } from '../actions/recipes';

function CategoryButton({ name, type }) {
  const selectedFilter = useSelector((state) => state.recipes.filter);
  const dispatch = useDispatch();

  const token = 1;

  const click = (category) => {
    const reqType = { request: 'filter', key: 'c', parameter: category };
    if (selectedFilter === category || category === 'All') {
      dispatch(fetchRecipes(token, type));
    } else dispatch(fetchRecipes(token, type, reqType));
  };

  return (
    <button
      type="button"
      onClick={ () => click(name) }
      data-testid={ `${name}-category-filter` }
    >
      {name}
    </button>
  );
}

CategoryButton.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default CategoryButton;
