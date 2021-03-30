import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';

function RecipesContextProvider({ children }) {
  const [meals, setMeals] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [shouldRenderAll, setShouldRenderAll] = useState(true);
  const [mealsOrigin, setMealsOrigin] = useState([]);

  useEffect(() => {
    async function getMealsOrigin() {
      const data = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
      const response = await (data.json());
      setMealsOrigin(response.meals);
    }
    getMealsOrigin();
  }, []);

  function setShow() {
    const invert = !isShow;
    setIsShow(invert);
  }

  const context = {
    meals,
    setMeals,
    drinks,
    setDrinks,
    setShow,
    isShow,
    shouldRenderAll,
    setShouldRenderAll,
    mealsOrigin,
    setMealsOrigin,
  };

  return (
    <RecipesContext.Provider value={ context }>
      { children }
    </RecipesContext.Provider>
  );
}

RecipesContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default RecipesContextProvider;
