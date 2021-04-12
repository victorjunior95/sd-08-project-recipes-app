import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
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
    <Button
      className="custom-btn"
      data-testid={ `${name}-category-filter` }
      onClick={ () => click(name) }
      size="sm"
      type="button"
      variant="primary"
      // block={ name === 'All' || name.length > 15 }
    >
      {name}
    </Button>
  );
}

CategoryButton.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default CategoryButton;
