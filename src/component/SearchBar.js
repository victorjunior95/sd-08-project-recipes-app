import React, { useState } from 'react';
// import PropTypes from 'prop-types';

export default function SearchBar() {
  const [searchParamenters, setSearchParameters] = useState({
    searchInput: '',
    selectedParameter: '',
  });

  const { searchInput, selectedParameter } = searchParamenters;

  const handleChange = ({ target }) => {
    setSearchParameters({
      ...searchParamenters,
      [target.name]: target.value,
    });
  };

  return (
    <div>
      <input
        type="text"
        data-testid="search-input"
        name="searchInput"
        value={ searchInput }
        onChange={ handleChange }
      />
      <label htmlFor="ingredient">
        <input
          id="ingredient"
          type="radio"
          name="selectedParameter"
          data-testid="ingredient-search-radio"
          value="ingredient"
          onChange={ handleChange }
        />
        Ingrediente
      </label>
      <label htmlFor="name">
        <input
          id="name"
          type="radio"
          name="selectedParameter"
          data-testid="name-search-radio"
          value="name"
          onChange={ handleChange }
        />
        Nome
      </label>
      <label htmlFor="first-letter">
        <input
          id="first-letter"
          type="radio"
          name="selectedParameter"
          data-testid="first-letter-search-radio"
          value="first-letter"
          onChange={ handleChange }
        />
        Primeira letra
      </label>
      <button type="button" data-testid="exec-search-btn">Buscar</button>
    </div>
  );
}
