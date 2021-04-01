import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';
import fetchMealThunk from '../redux/actions/fetchMealAction';
import { clearRecipesAction } from '../redux/actions/clearRecipesAction';
import clearSearchAction from '../redux/actions/clearSearchAction';
import MealCatsButtons from '../components/MealCatsButton';
import fetchRecipesMealCatsThunk from '../redux/actions/fetchMealCatRecipesAction';
import { fetchMealIFilterThunk } from '../redux/actions/fetchIngridientsAction';

function MealsRecipes() {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    inputValue,
    inputType,
    mealFilter,
    ingredientFilter,
  } = useSelector((state) => state.search);
  const meals = useSelector((state) => state.recipes.recipes);
  // const input = useSelector((state) => state.search.inputValue);
  // const type = useSelector((state) => state.search.inputType);
  // const filter = useSelector((state) => state.search.mealFilter);
  // const ifilter = useSelector((state) => state.search.ingredientFilter);
  useEffect(() => {
    let fetchMeal;
    if (!ingredientFilter && !mealFilter) {
      fetchMeal = (inputf, typef) => dispatch(fetchMealThunk(inputf, typef));
      fetchMeal(inputValue, inputType);
    }
    if (mealFilter) {
      fetchMeal = (filterf) => dispatch(fetchRecipesMealCatsThunk(filterf));
      fetchMeal(mealFilter);
    }
    if (ingredientFilter && !mealFilter) {
      fetchMeal = (filteri) => dispatch(fetchMealIFilterThunk(filteri));
      fetchMeal(ingredientFilter);
    }
  }, [inputValue, inputType, mealFilter, ingredientFilter]);

  useEffect(() => () => {
    const clearDispatch = () => {
      dispatch(clearRecipesAction());
      dispatch(clearSearchAction());
    };
    clearDispatch();
  }, []);

  useEffect(() => {
    if (meals.length === 1) return <Redirect to={ `/comidas/${meals[0].idMeal}` } />;
  }, []);

  return (
    <main>
      {(meals && meals.length === 1 && mealFilter === '')
      && <Redirect to={ `/comidas/${meals[0].idMeal}` } />}
      <Header />
      <MealCatsButtons />
      { meals && meals.map((elem, index) => (
        <button
          key={ elem.idMeal }
          type="button"
          onClick={ () => history.push(`/comidas/${elem.idMeal}`) }
          data-testid={ `${index}-recipe-card` }
        >
          <div>
            <h4 data-testid={ `${index}-card-name` }>{ elem.strMeal }</h4>
            <span>{ elem.idMeal }</span>
            <img
              className="card"
              src={ elem.strMealThumb }
              alt={ elem.strMeal }
              data-testid={ `${index}-card-img` }
            />
          </div>
        </button>
      ))}
      <Footer />
    </main>
  );
}

export default MealsRecipes;
