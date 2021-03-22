import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = (props) => {
  const { showInput } = props;
  return (
    <div>
      { showInput && (<input
        data-testid="search-input"
      />)}

      <label htmlFor="ingredients">
        <input
          name="radios"
          id="ingredients"
          type="radio"
          data-testid="ingredient-search-radio"
        />
        Ingrediente
      </label>
      <label htmlFor="name-search">
        <input
          name="radios"
          id="name-search"
          type="radio"
          data-testid="name-search-radio"
        />
        Nome
      </label>
      <label htmlFor="first-letter">
        <input
          name="radios"
          id="first-letter"
          type="radio"
          data-testid="first-letter-search-radio"
        />
        Primeira letra
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
      >
        Buscar
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  showInput: PropTypes.bool.isRequired,
};
export default SearchBar;
