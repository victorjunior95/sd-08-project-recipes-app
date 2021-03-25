import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import ListCard from '../components/ListCard';
import Footer from '../components/Footer';

export default class Drinks extends Component {
  render() {
    const { history: { push } } = this.props;
    const values = {
      name: 'Bebidas',
      url: {
        byIngredient: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=',
        byName: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
        byFirstLetter: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=',
      },
      defaultSearch: 'vodka',
    };
    const drinks = {
      id: 'idDrink',
      name: 'strDrink',
      thumb: 'strDrinkThumb',
      linkRedirect: '/bebidas/',
      history: push,
    };
    return (
      <div>
        <Header params={ values } />
        <ListCard infos={ drinks } />
        <Footer />
      </div>
    );
  }
}

Drinks.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
