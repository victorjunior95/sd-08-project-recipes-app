import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Header, Footer, Cards } from '../components';
import { fetchDrinksRandom, fetchDrinkCategory } from '../store/actions';
import '../styles/pages/Container.css';

const MAX_NUMBER_CARDS = 11;
class Drinks extends Component {
  componentDidMount() {
    const { getDrink, getDrinkCategory } = this.props;
    getDrinkCategory();
    getDrink();
  }

  render() {
    const { drinks } = this.props;
    if (drinks && drinks.length === 1) {
      return <Redirect to={ `/bebidas/${drinks[0].idDrink}` } />;
    }
    return (
      <div>
        <Header title="Bebidas" />
        <div className="container">

          {drinks && drinks.reduce((acc, cur, index) => {
            if (index <= MAX_NUMBER_CARDS) {
              acc = [...acc, cur];
            }
            return acc;
          }, []).map((drink, index) => (
            <Cards
              route={ `/bebidas/${drink.idDrink}` }
              data-testid={ `${index}-recipe-card` }
              key={ index }
              strThumb={ drink.strDrinkThumb }
              str={ drink.strDrink }
              index={ index }
              id={ drink.idDrink }
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

Drinks.propTypes = {
  drinks: PropTypes.arrayOf(PropTypes.objectOf),
  getDrink: PropTypes.func.isRequired,
  getDrinkCategory: PropTypes.func.isRequired,

};

Drinks.defaultProps = {
  drinks: [],
};

const mapStateToProps = ({ drinksReducer: { data: { drinks } } }) => ({
  drinks,
});

const mapDispatchToProps = (dispatch) => ({
  getDrink: (value) => dispatch(fetchDrinksRandom(value)),
  getDrinkCategory: () => dispatch(fetchDrinkCategory()),

});

export default connect(mapStateToProps, mapDispatchToProps)(Drinks);
