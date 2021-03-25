import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';

function DoneRecipes({ history }) {
  return (
    <>
      <Header history={ history } />
      <h1>Receitas Feitas</h1>
    </>
  );
}

DoneRecipes.propTypes = {
  history: PropTypes.string.isRequired,
};

export default DoneRecipes;
