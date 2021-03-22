import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header, SearchBar } from '../components';

class Foods extends Component {
  render() {
    const { history } = this.props;

    return (
      <div>
        <Header history={ history } />
        <SearchBar />
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
