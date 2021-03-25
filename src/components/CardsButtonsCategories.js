import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import PropTypes from 'prop-types';

class CardsButtonsCategories extends Component {
  render() {
    const { strCategory } = this.props;
    console.log('entrou');
    return (
      <button
        data-testid={ `${strCategory}-category-filter}` }
        type="button"
      >
        {strCategory}
      </button>
    );
  }
}

CardsButtonsCategories.propTypes = {
  strCategory: PropTypes.string.isRequired,

};

export default CardsButtonsCategories;
