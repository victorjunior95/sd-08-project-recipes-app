import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMealsCategories, requestMeals } from '../../redux/actions';
import { fetchMeal } from '../../services/API';
// import PropTypes from 'prop-types';

function Categories() {
  const QUANTITY_OF_CATEGORIES = 5;
  let categoriesFiltred = [];
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.mealsCategoriesReducer.categories);

  useEffect(() => {
    dispatch(getMealsCategories());
  }, [dispatch]);

  if (categories) {
    categoriesFiltred = categories
      .filter((categorie, index) => index < QUANTITY_OF_CATEGORIES);
  }

  async function handleClick(e) {
    const ops = await fetchMeal(e.target.value, 'categories');
    console.log(ops);
    dispatch(requestMeals(ops));
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
