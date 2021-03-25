import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDrinkCategories, requestDrinks } from '../../redux/actions';
import { fetchDrinks } from '../../services/API';

// import PropTypes from 'prop-types';

function Categories() {
  const QUANTITY_OF_CATEGORIES = 5;
  let categoriesFiltred = [];
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.drinkCategoriesReducer.categories);

  useEffect(() => {
    dispatch(getDrinkCategories());
  }, [dispatch]);

  if (categories) {
    categoriesFiltred = categories
      .filter((categorie, index) => index < QUANTITY_OF_CATEGORIES);
  }

  async function handleClick(e) {
    const ops = await fetchDrinks(e.target.value, 'categories');
    dispatch(requestDrinks(ops));
  }

  return (
    <>
      {categoriesFiltred
        .map((categorie) => (
          <button
            value={ categorie.strCategory }
            key={ categorie.strCategory }
            data-testid={ `${categorie.strCategory}-category-filter` }
            onClick={ (e) => handleClick(e) }
            type="button"
          >
            {categorie.strCategory}
          </button>))}
    </>
  );
}

export default Categories;
