import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { filterFoods } from '../../services/FoodsRequests';
import './searchBar.css';
import { filterDrinks } from '../../services/DrinksRequests';

const SearchBar = ({ title }) => {
  const history = useHistory();
  const [filter, setFilter] = useState('i');
  const [query, setQuery] = useState('');
  const submitFilters = async () => {
    if (filter === 'f' && query.length > 1) {
      alert('Sua busca deve conter somente 1 (um) caracter');
      return;
    }
    if (title === 'Comidas') {
      const meals = await filterFoods(filter, query);
      console.log(meals);
      if (meals.length === 1) {
        history.push(`/comidas/${meals[0].idMeal}`);
      }
    } else {
      const drinks = await filterDrinks(filter, query);
      if (drinks.length === 1) {
        history.push(`/bebidas/${drinks[0].idDrink}`);
      }
    }
  };
  return (
    <div className="container mt-2">
      <div className="search-bar">
        <input
          type="text"
          data-testid="search-input"
          onChange={ (e) => setQuery(e.target.value) }
        />
        <div className="radio-group">
          <label htmlFor="ingredient">
            <input
              id="ingredient"
              name="recipe"
              type="radio"
              data-testid="ingredient-search-radio"
              onChange={ () => setFilter('i') }
            />
            Ingrediente
          </label>
          <label htmlFor="name">
            <input
              id="name"
              name="recipe"
              type="radio"
              data-testid="name-search-radio"
              onChange={ () => setFilter('s') }
            />
            Nome
          </label>
          <label htmlFor="firstLetter">
            <input
              id="firstLetter"
              name="recipe"
              type="radio"
              data-testid="first-letter-search-radio"
              onChange={ () => setFilter('f') }
            />
            Primeira letra
          </label>
        </div>
        <button
          className="btn btn-info"
          type="button"
          data-testid="exec-search-btn"
          onClick={ () => submitFilters() }
        >
          Buscar
        </button>
      </div>
    </div>
  );
};
SearchBar.propTypes = {
  title: PropTypes.string.isRequired,
};
export default SearchBar;
