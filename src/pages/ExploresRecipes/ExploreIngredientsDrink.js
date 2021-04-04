import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Footer, Header } from '../../components';
// import { _ } from '../../store/actions';
import '../../styles/pages/Container.css';

class ExploreIngredientsDrink extends Component {
  render() {
    return (
      <div>
        <Header title="Explorar Ingredientes" />
        <div className="container">

          Eu sou o pagína de Explorar Ingredientes Bebidas
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

export default connect(null, null)(ExploreIngredientsDrink);
