import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';

function Explore({ history }) {
  return (
    <>
      <Header history={ history } />
      <h1>Explorar</h1>
    </>
  );
}

Explore.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

export default Explore;
