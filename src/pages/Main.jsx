import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router';
import RecipeCard from '../components/RecipeCard';
import Loading from '../components/Loading';
import CategoryButton from '../components/CategoryButton';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { byAddIngredient, fetchCategories, fetchRecipes } from '../actions/recipes';

function Main({ location: { pathname } }) {
  const {
    list, isFetching, categories, byIngredient,
  } = useSelector((state) => state.recipes);
  const dispatch = useDispatch();
  const history = useHistory();
  const type = pathname.slice(1);
  const token = 1;

  const renderRecipes = () => {
    if (list.length === 0) {
      alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
      return;
    }
    if (list.length === 1) {
      history.push(`${pathname}/${list[0].id}`);
      return;
    }
    return list.map((recipe, index) => (
      <RecipeCard
        type={ type }
        index={ index }
        recipe={ recipe }
        key={ `recipe-${index}` }
      />));
  };

  useEffect(() => {
    const reqType = { request: 'filter', key: 'i', parameter: byIngredient };
    dispatch(fetchCategories(token, type));
    if (byIngredient) {
      dispatch(fetchRecipes(token, type, reqType));
      dispatch(byAddIngredient(''));
    } else {
      dispatch(fetchRecipes(token, type));
    }
  }, [pathname]);

  return (
    <>
      <Header />
      { categories
        .map((category) => (
          <CategoryButton name={ category } key={ `btn-${category}` } type={ type } />))}
      <CategoryButton name="All" type={ type } />
      { isFetching ? <Loading /> : renderRecipes() }
      <Footer />
    </>
  );
}

Main.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default Main;
