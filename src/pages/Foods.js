import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header } from '../components';

class Foods extends Component {
  render() {
    const { history } = this.props;

    return (
      <div>
        <Header history={ history } />
        Eu sou o pagína de Comidas
      </div>
    );
  }
}

Foods.defaultProps = {
  history: {},
};
Foods.propTypes = {
  history: PropTypes.objectOf,
};
export default Foods;
