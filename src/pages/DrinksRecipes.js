import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';
import fetchDrinkThunk from '../redux/actions/fetchDrinkAction';
import clearRecipesAction from '../redux/actions/clearRecipesAction';
import clearSearchAction from '../redux/actions/clearSearchAction';

function DrinksRecipes() {
  const dispatch = useDispatch();
  const input = useSelector((state) => state.search.inputValue);
  const type = useSelector((state) => state.search.inputType);
  const drinks = useSelector((state) => state.recipes.recipes);
  useEffect(() => {
    const fetchData = (inputf, typef) => dispatch(fetchDrinkThunk(inputf, typef));
    fetchData(input, type);
  }, [dispatch, input, type]);
  useEffect(() => () => {
    dispatch(clearRecipesAction());
    dispatch(clearSearchAction());
  }, []);
  return (
    <main>
      { drinks && drinks.length === 1
        && <Redirect to={ `/bebidas/${drinks[0].idDrink}` } />}
      <Header />
      { drinks && drinks.map((elem, index) => (
        <div key={ elem.idDrink } data-testid={ `${index}-recipe-card` }>
          <h4 data-testid={ `${index}-card-name` }>{ elem.strDrink }</h4>
          <span>{ elem.idDrink }</span>
          <img
            className="card"
            src={ elem.strDrinkThumb }
            alt={ elem.strDrink }
            data-testid={ `${index}-card-img` }
          />
        </div>
      ))}
      <Footer />
    </main>
  );
}

export default DrinksRecipes;
