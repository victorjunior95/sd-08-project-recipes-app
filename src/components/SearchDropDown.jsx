import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from '../core/RecipesContext';
import fetchByFilter from '../services/fetchByFilter';

function SearchDropDown({ setDropSearch }) {
  const { setIsLoading, setMealData } = useContext(RecipesContext);
  const [inputs, setInputs] = useState({
    text: '',
    radio: null,
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setInputs({ ...inputs, [name]: value });
  };
  const handleClick = () => {
    fetchByFilter(inputs, setIsLoading, setMealData);
    setDropSearch(false);
  };
  return (
    <div className="search-container">
      <input
        data-testid="search-input"
        className="form-control"
        style={ {
          width: 340,
          margin: 'auto',
          marginTop: 10 } }
        onChange={ (event) => handleChange(event) }
        name="text"
        type="text"
      />
      <div className="radio-container">
        <label className="radio-button" htmlFor="ingredient-search-radio">
          <input
            className="radio"
            name="radio"
            id="ingredient-search-radio"
            type="radio"
            value="ingredient"
            data-testid="ingredient-search-radio"
            onChange={ (event) => handleChange(event) }
          />
          <div className="my-radio-button" />
          Ingrediente
        </label>
        <label className="radio-button" htmlFor="name-search-radio">
          <input
            className="radio"
            name="radio"
            id="name-search-radio"
            type="radio"
            value="name"
            data-testid="name-search-radio"
            onChange={ (event) => handleChange(event) }
          />
          <div className="my-radio-button" />
          Nome
        </label>
        <label className="radio-button" htmlFor="first-letter-search-radio">
          <input
            className="radio"
            name="radio"
            id="first-letter-search-radio"
            type="radio"
            value="firstletter"
            data-testid="first-letter-search-radio"
            onChange={ (event) => handleChange(event) }
          />
          <div className="my-radio-button" />
          Primeira letra
        </label>
      </div>
      <button
        data-testid="exec-search-btn"
        type="button"
        className="btn btn-primary"
        onClick={ handleClick }
      >
        BUSCAR
      </button>
    </div>
  );
}

SearchDropDown.propTypes = {
  setDropSearch: PropTypes.func.isRequired,
};

export default SearchDropDown;
