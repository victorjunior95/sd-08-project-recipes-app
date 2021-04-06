import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDrinkCategories, requestDrinks } from '../../redux/actions';
import { fetchDrinks } from '../../services/API';
import './buttonsCategories.scss';

// import PropTypes from 'prop-types';

function Categories() {
  const [selectedDrink, setSelectedDrink] = useState('');
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
    const category = e.target.value;
    setSelectedDrink(category);
    if (selectedDrink === category || category === 'All') {
      const arrayOFDrinks = await fetchDrinks('', 'name');
      dispatch(requestDrinks(arrayOFDrinks));
      setSelectedDrink('');
    } else {
      const arrayOFDrinks = await fetchDrinks(category, 'categories');
      dispatch(requestDrinks(arrayOFDrinks));
    }
  }

  return (
    <div className="buttonCategories">
      <button
        className="buttons"
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
            className="buttons"
            value={ categorie.strCategory }
            key={ categorie.strCategory }
            data-testid={ `${categorie.strCategory}-category-filter` }
            onClick={ (e) => handleClick(e) }
            type="button"
          >
            {categorie.strCategory}
          </button>))}
    </div>
  );
}

export default Categories;
