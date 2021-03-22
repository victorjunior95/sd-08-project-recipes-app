import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header } from '../components';

class Drinks extends Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <Header history={ history } />
        Eu sou página de Bebidas
      </div>
    );
  }
}

Drinks.propTypes = {
  history: PropTypes.shape(
    PropTypes.func,
  ).isRequired,
};

export default Drinks;
