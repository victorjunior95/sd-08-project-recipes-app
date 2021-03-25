import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Explore({ history }) {
  return (
    <>
      <Header history={ history } />
      <h1>Explorar</h1>
      <Footer />
    </>
  );
}

Explore.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

export default Explore;
