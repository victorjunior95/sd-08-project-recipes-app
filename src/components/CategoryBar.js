import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import RecipesContext from '../context/RecipesContext';
import { getCocktails, getCocktailsList, getMeals, getMealsList } from '../services';
import { SEARCH_BY_CATEGORY, SEARCH_BY_NAME } from '../common/defs';

export default function CategoryBar({ type }) {
  const { setMeals, setDrinks } = useContext(RecipesContext);

  const [categoriesList, setCategoriesList] = useState([]);
  const [filteredBy, setFilteredBy] = useState('');

  const handleClick = async (evt) => {
    const categoryChoised = evt.target.name;
    if (type === 'meals' && filteredBy !== categoryChoised) {
      const { meals } = await getMeals(SEARCH_BY_CATEGORY, categoryChoised);
      setMeals(meals);
      setFilteredBy(categoryChoised);
    } else if (type === 'cocktails' && filteredBy !== categoryChoised) {
      const { drinks } = await getCocktails(SEARCH_BY_CATEGORY, categoryChoised);
      setDrinks(drinks);
      setFilteredBy(categoryChoised);
    } else if (type === 'meals' && filteredBy === categoryChoised) {
      const { meals } = await getMeals(SEARCH_BY_NAME, '');
      setMeals(meals);
      setFilteredBy('');
    } else if (type === 'cocktails' && filteredBy === categoryChoised) {
      const { drinks } = await getCocktails(SEARCH_BY_NAME, '');
      setDrinks(drinks);
      setFilteredBy('');
    }
  };

  const clearFilters = async () => {
    if (type === 'meals') {
      const { meals } = await getMeals(SEARCH_BY_NAME, '');
      setMeals(meals);
      setFilteredBy('');
    } else {
      const { drinks } = await getCocktails(SEARCH_BY_NAME, '');
      setDrinks(drinks);
      setFilteredBy('');
    }
  };

  useEffect(() => {
    const getCategories = async () => {
      if (type === 'meals') {
        const mealCategoriesList = await getMealsList();
        setCategoriesList(mealCategoriesList);
      } else {
        const cocktailCategoriesList = await getCocktailsList();
        setCategoriesList(cocktailCategoriesList);
      }
    };
    getCategories();
  }, [type]);

  useEffect(() => {
    const getInitialList = async () => {
      if (type === 'meals') {
        const { meals } = await getMeals(SEARCH_BY_NAME, '');
        setMeals(meals);
      } else {
        const { drinks } = await getCocktails(SEARCH_BY_NAME, '');
        setDrinks(drinks);
      }
    };
    getInitialList();
  }, [setDrinks, setMeals, type]);

  return (
    <section>
      <button
        type="button"
        data-testid="All-category-filter"
        onClick={ clearFilters }
      >
        All
      </button>
      {categoriesList.map((categoryName) => (
        <button
          type="button"
          name={ categoryName }
          key={ categoryName }
          onClick={ handleClick }
          data-testid={ `${categoryName}-category-filter` }
        >
          {categoryName}
        </button>))}
    </section>
  );
}

CategoryBar.propTypes = ({ type: PropTypes.string.isRequired });
