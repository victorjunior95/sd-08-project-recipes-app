import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Button from './Button';

const CategoriesContainer = ({ page }) => {
  const foodsCategories = useSelector(
    (state) => state.CategoriesRecipes.foodsCategories,
  );
  const drinksCategories = useSelector(
    (state) => state.CategoriesRecipes.drinksCategories,
  );
  const showCategoriesButtons = () => {
    let buttons = [];
    if (page === 'Comidas') {
      buttons = [
        {
          strCategory: 'All',
        },
        ...foodsCategories,
      ];
    } else if (page === 'Bebidas') {
      buttons = [
        {
          strCategory: 'All',
        },
        ...drinksCategories,
      ];
    }
    return buttons.map((button) => (
      <Button
        name={ button.strCategory }
        key={ button.strCategory }
        data-testid={ `${button.strCategory}-category-filter` }
      />
    ));
  };
  return <section>{showCategoriesButtons()}</section>;
};

CategoriesContainer.propTypes = {
  page: PropTypes.string.isRequired,
};

export default CategoriesContainer;
