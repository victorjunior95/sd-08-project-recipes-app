import React, { Component } from 'react';
import Footer from '../components/Footer';

import Header from '../components/Header';

export default class Explore extends Component {
  render() {
    const values = {
      name: 'Explorar',
      url: {
        byIngredient: 'https://www.themealdb.com/api/json/v1/1/filter.php?i=',
        byName: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
        byFirstLetter: 'https://www.themealdb.com/api/json/v1/1/search.php?f=',
      },
    };

    return (
      <div>
        <Header params={ values } />
        <Footer />
      </div>
    );
  }
}
