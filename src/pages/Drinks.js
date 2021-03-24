import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Header, Footer } from '../components';
import { fetchDrink } from '../store/actions';
import { alertSearch } from '../serviceWorker';

// import { _ } from '../store/actions';

class Drinks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      searchRadio: 'name',
    };
  }

  componentDidMount() {
    const { search, searchRadio } = this.state;
    const { getDrink } = this.props;
    getDrink({ search, searchRadio });
  }

  render() {
    const { listDrinks, notDrinksFound } = this.props;
    if (notDrinksFound) alertSearch();
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
Drinks.defaultProps = { listDrinks: [] };

Drinks.propTypes = {
  listDrinks: PropTypes.arrayOf(PropTypes.objectOf),
  getDrink: PropTypes.func.isRequired,
  notDrinksFound: PropTypes.bool.isRequired,

};

const mapStateToProps = (state) => ({
  listDrinks: state.drinksReducer.data.drinks,
  listDrinks: state.drinksReducer.data.notDrinksFound,

});

const mapDispatchToProps = (dispatch) => ({
  getDrink: (value) => dispatch(fetchDrink(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Drinks);
