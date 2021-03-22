import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import Header from '../components/Header';

function MainRecipes({ history }) {
  const { pathname } = history.location;
  return (
    <Header title={ pathname } />
  );
}

export default MainRecipes;

MainRecipes.propTypes = {
  history: PropTypes.objectOf(PropTypes.object).isRequired,
};
