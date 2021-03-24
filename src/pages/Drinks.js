import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Header, Footer } from '../components';
import { fetchDrink } from '../store/actions';

class Drinks extends Component {
  componentDidMount() {
    const { getDrink } = this.props;
    getDrink({ search, searchRadio });
  }

  render() {
    const { listDrinks } = this.props;

    if (listDrinks && listDrinks.length === 1) {
      return <Redirect to={ `/bebidas/${listDrinks[0].idDrink}` } />;
    }
    return (
      <div>
        <Header title="Bebidas" />
        {listDrinks && listDrinks.map((element, index) => (
          <div key={ index }>
            {element.strDrink}
          </div>))}
        <Footer />
      </div>
    );
  }
}

Drinks.propTypes = {
  listDrinks: PropTypes.arrayOf(PropTypes.objectOf)
    .isRequired,
  getDrink: PropTypes.func.isRequired,

};

const mapStateToProps = (state) => ({
  listDrinks: state.drinksReducer.data.drinks,

});

const mapDispatchToProps = (dispatch) => ({
  getDrink: (value) => dispatch(fetchDrink(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Drinks);
