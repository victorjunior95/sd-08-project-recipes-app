import React, { Component } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

// import PropTypes from 'prop-types';

class Foods extends Component {
  render() {
    return (
      <div>
        <Header />
        <SearchBar />
      </div>
    );
  }
}

// Foods.propTypes = {

// };

export default Foods;
