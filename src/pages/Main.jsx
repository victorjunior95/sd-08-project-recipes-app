import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, fetchRecipes } from '../actions/recipes';

import RecipeCard from '../components/RecipeCard';
import Loading from '../components/Loading';
import CategoryButton from '../components/CategoryButton';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Main({ location: { pathname } }) {
  const { list, isFetching, categories, byIngredient } = useSelector((state) => state.recipes);
  const dispatch = useDispatch();
  const selectType = { '/comidas': 'meals', '/bebidas': 'drinks' };
  const type = selectType[pathname];
  const token = 1;

  useEffect(() => {
    dispatch(fetchCategories(token, type));
    dispatch(fetchRecipes(token, type));
    if (byIngredient) {
      dispatch(fetchRecipes(token, type, { request: 'filter', key: 'i', parameter: byIngredient }));
      dispatch(byAddIngredient(''));
    }
  }, []);

  return (
    <>
      <Header />
      { categories
        .map((category) => (
          <CategoryButton name={ category } key={ `btn-${category}` } type={ type } />))}
      <CategoryButton name="All" type={ type } />
      { isFetching ? <Loading /> : list.map((recipe, index) => (
        <RecipeCard
          type={ type === 'meals' ? 'Meal' : 'Drink' }
          index={ index }
          recipe={ recipe }
          key={ `recipe-${index}` }
        />))}
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
