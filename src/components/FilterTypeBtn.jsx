import React from 'react';
import PropTypes from 'prop-types';

export default function FilterTypeBtn({ handleSelector }) {
  return (
    <div>
      <button
        type="button"
        data-testid="filter-by-all-btn"
        value="all"
        onClick={ (e) => handleSelector(e) }
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
        value="food"
        onClick={ (e) => handleSelector(e) }
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        value="drinks"
        onClick={ (e) => handleSelector(e) }
      >
        Drinks
      </button>
    </div>
  );
}

FilterTypeBtn.propTypes = {
  handleSelector: PropTypes.func.isRequired,
};
