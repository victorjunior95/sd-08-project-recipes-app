import React, { Component } from 'react';

import Header from '../components/Header';
import ListCard from '../components/ListCard';

export default class Food extends Component {
  render() {
    const values = {
      name: 'Comidas',
      url: {
        byIngredient: 'https://www.themealdb.com/api/json/v1/1/filter.php?i=',
        byName: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
        byFirstLetter: 'https://www.themealdb.com/api/json/v1/1/search.php?f=',
      },
    };
    const food = {
      id: 'idMeal',
      name: 'strMeal',
      thumb: 'strMealThumb',
      linkRedirect: '/comidas/',
    };
    return (
      <div>
        <Header params={ values } />
        <ListCard infos={ food } />
      </div>
    );
  }
}
