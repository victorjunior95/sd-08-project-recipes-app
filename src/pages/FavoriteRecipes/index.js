import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';

function FavoriteRecipes({ history }) {
  return (
    <>
      <Header history={ history } />
      <h1>Receitas Favoritas</h1>
    </>
  );
}

FavoriteRecipes.propTypes = {
  history: PropTypes.string.isRequired,
};

export default FavoriteRecipes;
