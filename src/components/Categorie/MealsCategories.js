import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMealsCategories, requestMeals } from '../../redux/actions';
import { fetchMeal } from '../../services/API';
// import PropTypes from 'prop-types';

function Categories() {
  const [selected, setSelected] = useState('');
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
    const category = e.target.value;
    setSelected(category);
    console.log(selected, 'e', category);
    if (selected === category || category === 'All') {
      const ops = await fetchMeal(' ', 'name');
      console.log(ops);
      dispatch(requestMeals(ops));
      setSelected('');
    } else {
      const ops = await fetchMeal(category, 'categories');
      console.log(ops);
      dispatch(requestMeals(ops));
    }
    // if (category === 'All') {
    //   const ops = await fetchMeal(' ', 'name');
    //   console.log(ops);
    //   dispatch(requestMeals(ops));
    //   setSelected('');
    // }
  }

  return (
    <>
      <button
        value="All"
        type="button"
        onClick={ (e) => handleClick(e) }
        data-testid="All-category-filter"
      >
        All
      </button>
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
