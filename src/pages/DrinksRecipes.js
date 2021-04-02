import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';
import fetchDrinkThunk from '../redux/actions/fetchDrinkAction';
import fetchRecipesDrinkCatsThunk from '../redux/actions/fetchDrinkCatRecipesAction';
import { clearRecipesAction } from '../redux/actions/clearRecipesAction';
import clearSearchAction from '../redux/actions/clearSearchAction';
import DrinkCatsButtons from '../components/DrinkCatsButtons';
import { fetchDrinkIFilterThunk } from '../redux/actions/fetchIngridientsAction';

function DrinksRecipes() {
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    inputValue,
    inputType,
    drinkFilter,
    ingredientFilter,
  } = useSelector((state) => state.search);
  const { recipes } = useSelector((state) => state.recipes);

  useEffect(() => {
    let fetchDrink;
    if (!ingredientFilter && !drinkFilter) {
      fetchDrink = (inputf, typef) => dispatch(fetchDrinkThunk(inputf, typef));
      fetchDrink(inputValue, inputType);
    }
    if (drinkFilter) {
      fetchDrink = (filterf) => dispatch(fetchRecipesDrinkCatsThunk(filterf));
      fetchDrink(drinkFilter);
    }
    if (ingredientFilter && !drinkFilter) {
      fetchDrink = (filteri) => dispatch(fetchDrinkIFilterThunk(filteri));
      fetchDrink(ingredientFilter);
    }
  }, [inputValue, inputType, drinkFilter, ingredientFilter]);

  useEffect(() => () => {
    dispatch(clearRecipesAction());
    dispatch(clearSearchAction());
  }, []);

  useEffect(() => {
    if (recipes.length === 1) return <Redirect to={ `/bebidas/${recipes[0].idDrink}` } />;
  }, []);

  return (
    <main>
      { recipes && recipes.length === 1
        && <Redirect to={ `/bebidas/${recipes[0].idDrink}` } />}
      <Header />
      <DrinkCatsButtons />
      { recipes && recipes.map((elem, index) => (
        <button
          key={ elem.idDrink }
          type="button"
          onClick={ () => history.push(`/bebidas/${elem.idDrink}`) }
          data-testid={ `${index}-recipe-card` }
        >
          <div>
            <h4 data-testid={ `${index}-card-name` }>{ elem.strDrink }</h4>
            <span>{ elem.idDrink }</span>
            <img
              className="card"
              src={ elem.strDrinkThumb }
              alt={ elem.strDrink }
              data-testid={ `${index}-card-img` }
            />
          </div>
        </button>
      ))}
      <Footer />
    </main>
  );
}

export default DrinksRecipes;
