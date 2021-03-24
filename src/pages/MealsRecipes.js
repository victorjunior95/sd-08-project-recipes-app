import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';
import fetchMealThunk from '../redux/actions/fetchMealAction';
import clearRecipesAction from '../redux/actions/clearRecipesAction';
import clearSearchAction from '../redux/actions/clearSearchAction';

function MealsRecipes() {
  const dispatch = useDispatch();
  const input = useSelector((state) => state.search.inputValue);
  const type = useSelector((state) => state.search.inputType);
  const meals = useSelector((state) => state.recipes.recipes);
  useEffect(() => {
    const fetchData = (inputf, typef) => dispatch(fetchMealThunk(inputf, typef));
    fetchData(input, type);
  }, [dispatch, input, type]);

  useEffect(() => () => {
    dispatch(clearRecipesAction());
    dispatch(clearSearchAction());
  }, []);

  return (
    <main>
      {meals && meals.length === 1 && <Redirect to={ `/comidas/${meals[0].idMeal}` } />}
      <Header />
      { meals && meals.map((elem, index) => (
        <div key={ elem.idMeal } data-testid={ `${index}-recipe-card` }>
          <h4 data-testid={ `${index}-card-name` }>{ elem.strMeal }</h4>
          <span>{ elem.idMeal }</span>
          <img
            className="card"
            src={ elem.strMealThumb }
            alt={ elem.strMeal }
            data-testid={ `${index}-card-img` }
          />
        </div>
      ))}
      <Footer />
    </main>
  );
}

export default MealsRecipes;
