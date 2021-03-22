import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MainRecipes({ history }) {
  const { pathname } = history.location;
  return (
    <main>
      <Header title={ pathname } />
      <Footer />
    </main>
  );
}

export default MainRecipes;

MainRecipes.propTypes = {
  history: PropTypes.objectOf(PropTypes.object).isRequired,
};
