import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Footer, Header } from '../../components';
// import { _ } from '../../store/actions';

class ExploreRegionalFoods extends Component {
  render() {
    return (
      <div>
        <Header title="Explorar Origem" />
        <div>
          <select
            data-testid="explore-by-area-dropdown"
          >
            <option
              data-testid="All-option"
              value="All"
            >
              All
            </option>
            {/* {_.map((_) => (
              <option
                value={ _ }
                key={ _ }
                data-testid={ `${_}-option` }
              >
                { _ }
              </option>
            ))} */}
          </select>
        </div>
        <div>
          {/* map */}
        </div>
        <Footer />
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

export default connect(null, null)(ExploreRegionalFoods);
