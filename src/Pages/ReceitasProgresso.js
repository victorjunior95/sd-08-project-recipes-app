import React, { useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useRouteMatch } from 'react-router';
import {
  DetailImage, DetailInstructions, DetailTitle, DetailVideo,
} from './Details';
import { fetchItem } from '../store/apiSlice';
import DetailRecommend from './Details/DetailRecommend';
import DetailIngredientsProgress from './ReceitasProgressCheckbox';

// const isDoneRecipe = (id) => {
//   const done = JSON.parse(localStorage.getItem('doneRecipes'));
//   return done ? done.some((element) => element.id === id) : false;
// };

// const isInProgressRecipe = (id) => {
//   const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));

//   if (!inProgress) return false;

//   const cocktailCheck = inProgress.cocktails && id in inProgress.cocktails;
//   const mealCheck = inProgress.meals && id in inProgress.meals;

//   return Boolean(cocktailCheck || mealCheck);
// };

const setLocal = (isFood, id ,checkbox) => {
  if (!isFood) {
    localStorage.setItem('inProgressRecipes', JSON.stringify({
      cocktails: {
        [id]: checkbox,
      },
      meals: {},
    }));
  } else {
    localStorage.setItem('inProgressRecipes', JSON.stringify({
      cocktails: {},
      meals: {
        [id]: checkbox,
      },
    }));
  }
};

const getRecipeInfo = (string, item) => Object.entries(item).reduce((array, entry) => (
  entry[0].includes(string) && entry[1] && entry[1].length > 0
    ? [...array, entry[1]] : array
), []);

function DetailsProgress() {
  const dispatch = useDispatch();
  const { url } = useRouteMatch();
  const isFood = url.includes('comidas');
  const { id } = useParams();
  const isLoading = useSelector((state) => state.api.loading === 'pending');
  const item = useSelector((state) => {
    if (state.api.data.meals) return state.api.data.meals[0];
    if (state.api.data.drinks) return state.api.data.drinks[0];
    return {};
  });
  const [checkbox, setCheckBox] = useState([]);
  console.log(checkbox);

  const checkboxLocalStorage = (index, checked) => {
    if (checked === true) {
      setCheckBox([...checkbox, index]);
    } else if (checked === false) {
      const checkboxClone = [...checkbox];
      checkboxClone.splice(checkbox.indexOf(index), 1);
      setCheckBox(checkboxClone);
    }
  };

  useEffect(() => {
    const database = isFood ? 'themealdb' : 'thecocktaildb';
    const endpoint = `https://www.${database}.com/api/json/v1/1/lookup.php?i=${id}`;
    dispatch(fetchItem(endpoint));
  }, [isFood, id, dispatch]);

  useEffect(() => {
    setLocal(isFood, id, checkbox);
  });

  if (isLoading) return <Spinner animation="border" />;

  return (
    <main>
      <DetailImage src={ item.strMealThumb || item.strDrinkThumb } />
      <DetailTitle
        title={ item.strMeal || item.strDrink }
        cat={ item.strAlcoholic || item.strCategory }
      />
      <DetailIngredientsProgress
        checkbox={ checkboxLocalStorage }
        ingredients={ getRecipeInfo('Ingredient', item) }
        measures={ getRecipeInfo('Measure', item) }
      />
      <DetailInstructions instructions={ item.strInstructions } />
      { isFood && <DetailVideo vidSrc={ item.strYoutube } />}
      <DetailRecommend isFood={ isFood } />
      {/* <Button data-testid="finish-recipe-btn" disabled={ checkboxAllMarked() }>Finalizar Receita</Button> */}
    </main>
  );
}

export default DetailsProgress;
