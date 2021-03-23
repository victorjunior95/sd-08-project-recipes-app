import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ fetchFunction }) => {
  const [searchType, setSearchType] = useState('');
  const [searchValue, setSearchValue] = useState('');

  function handleSearchButton() {
    if (searchType === 'firstLetter' && searchValue.length > 1) {
      alert('Sua busca deve conter somente 1 (um) caracter');
      setSearchValue('');
      return;
    }
    fetchFunction(searchType, searchValue);
  }

  return (
    <form>
      <input
        type="text"
        placeholder="O que gostaria de pesquisar?"
        value={ searchValue }
        onChange={ ({ target }) => setSearchValue(target.value) }
        data-testid="search-input"
      />

      <label htmlFor="search-by-ingredient">
        Ingrediente
        <input
          id="search-by-ingredient"
          name="search-type"
          value="ingredient"
          type="radio"
          data-testid="ingredient-search-radio"
          onChange={ ({ target }) => setSearchType(target.value) }
        />
      </label>

      <label htmlFor="search-by-name">
        Nome
        <input
          id="search-by-name"
          name="search-type"
          value="name"
          type="radio"
          data-testid="name-search-radio"
          onChange={ ({ target }) => setSearchType(target.value) }
        />
      </label>

      <label htmlFor="search-by-first-letter">
        Primeira letra
        <input
          id="search-by-first-letter"
          name="search-type"
          value="firstLetter"
          type="radio"
          data-testid="first-letter-search-radio"
          onChange={ ({ target }) => setSearchType(target.value) }
        />
      </label>

      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ handleSearchButton }
      >
        Pesquisar
      </button>
    </form>
  );
};

SearchBar.propTypes = {
  fetchFunction: PropTypes.func.isRequired,
};

export default SearchBar;
