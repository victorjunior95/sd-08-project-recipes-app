import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Header, Footer } from '../components';
import { fetchFood } from '../store/actions';

class Foods extends Component {
  componentDidMount() {
    const { search, searchRadio } = this.state;
    const { getFood } = this.props;
    getFood({ search, searchRadio });
  }

  render() {
    const { listFoods } = this.props;
    if (listFoods && listFoods.length === 1) {
      return <Redirect to={ `/comidas/${listFoods[0].idMeal}` } />;
    }

    return (
      <div>
        <Header title="Comidas" />
        { listFoods && listFoods.map((element, index) => (
          <div key={ index }>
            {element.strMeal}
          </div>))}
        <Footer />
      </div>
    );
  }
}

Foods.propTypes = {
  listFoods: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
  getFood: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  listFoods: state.foodsReducer.data.meals,
});

const mapDispatchToProps = (dispatch) => ({
  getFood: (value) => dispatch(fetchFood(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Foods);
