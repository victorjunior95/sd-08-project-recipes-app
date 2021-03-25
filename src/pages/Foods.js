import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Header, Footer, Cards } from '../components';
import { fetchFoodsRandom, fetchFoodCategory } from '../store/actions';
import '../styles/pages/Container.css';

const MAX_NUMBER_CARDS = 11;

class Foods extends Component {
  componentDidMount() {
    const { getFood, getFoodCategory } = this.props;
    getFood();
    getFoodCategory();
  }

  render() {
    const { meals } = this.props;
    if (meals && meals.length === 1) {
      return <Redirect to={ `/comidas/${meals[0].idMeal}` } />;
    }

    return (
      <div>
        <Header title="Comidas" />
        <div className="container">

          { meals && meals.reduce((acc, cur, index) => {
            if (index <= MAX_NUMBER_CARDS) {
              acc.push(cur);
            }
            return acc;
          }, [])
            .map((food, index) => (
              <Cards
                key={ index }
                strThumb={ food.strMealThumb }
                str={ food.strMeal }
                index={ index }
              />
            ))}
        </div>
        <Footer />
      </div>
    );
  }
}

Foods.propTypes = {
  meals: PropTypes.arrayOf(PropTypes.objectOf),
  getFood: PropTypes.func.isRequired,
  getFoodCategory: PropTypes.func.isRequired,
};

Foods.defaultProps = {
  meals: [],
};

const mapStateToProps = ({ foodsReducer: { data: { meals } } }) => ({
  meals,

});

const mapDispatchToProps = (dispatch) => ({
  getFood: (value) => dispatch(fetchFoodsRandom(value)),
  getFoodCategory: () => dispatch(fetchFoodCategory()),

});

export default connect(mapStateToProps, mapDispatchToProps)(Foods);
