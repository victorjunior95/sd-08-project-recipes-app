import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Footer, Header } from '../../components';
// import { _ } from '../../store/actions';

class ExploreIngredientsDrink extends Component {
  render() {
    return (
      <div>
        <Header title="Explorar Ingredientes" />
        Eu sou o pagína de Explorar Ingredientes Bebidas
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

export default connect(null, null)(ExploreIngredientsDrink);