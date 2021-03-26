import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import PropTypes from 'prop-types';

class CardsButtonsCategories extends Component {
  render() {
    const { strCategory, callback } = this.props;
    return (
      <button
        data-testid={ `${strCategory}-category-filter` }
        type="button"
        onClick={ () => callback({ search: strCategory, searchRadio: 'filterCategory' }) }
      >
        {strCategory}
      </button>
    );
  }
}

CardsButtonsCategories.propTypes = {
  strCategory: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,

};

export default (CardsButtonsCategories);
