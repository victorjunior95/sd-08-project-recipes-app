import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FilterButtons extends Component {
  render() {
    const { filters } = this.props;
    return (
      <div className="filters">
        <center>
          <button
            type="button"
            onClick={ () => filters('all') }
            data-testid="filter-by-all-btn"
          >
            All
          </button>
          <button
            type="button"
            onClick={ () => filters('food') }
            data-testid="filter-by-food-btn"
          >
            Food
          </button>
          <button
            type="button"
            onClick={ () => filters('drink') }
            data-testid="filter-by-drink-btn"
          >
            Drinks
          </button>
        </center>
      </div>
    );
  }
}

FilterButtons.propTypes = {
  filters: PropTypes.func.isRequired,
};
