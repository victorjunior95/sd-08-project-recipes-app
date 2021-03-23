import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Header } from '../../components';
// import { _ } from '../../store/actions';

class DoneRecipes extends Component {
  render() {
    return (
      <div>
        <Header title="Receitas Feitas" />
        <div>
          <button
            type="button"
            data-testid="filter-by-all-btn"

          >
            All
          </button>
          <button
            type="button"
            data-testid="filter-by-food-btn"

          >
            Food
          </button>
          <button
            type="button"
            data-testid="filter-by-drink-btn"

          >
            Drinks
          </button>
        </div>
        <div>
          {/* map */}
        </div>
      </div>
    );
  }
}

// _.propTypes = {
//   _: PropTypes._.isRequired,
// };

// const mapDispatchToProps = (dispatch) => ({
//   _: (_) => {
//     dispatch(_(_));
//   },
// });

export default connect(null, null)(DoneRecipes);
