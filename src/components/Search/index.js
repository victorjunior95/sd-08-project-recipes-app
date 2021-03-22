import React, { useContext, useState } from 'react';
import './Search.css';
import { FoodCtx } from '../../context/ContextFood';

function Search() {
  const { setFilter, currentPage } = useContext(FoodCtx);
  const [radio, setRadio] = useState('');
  const [input, setInput] = useState('');

  const handleChangeInput = ({ target }) => {
    setInput(target.value);
  };

  const handleChangeRadio = ({ target }) => {
    setRadio(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(radio, input);
    setFilter({ key: radio, value: input, currentPage });
  };

  return (
    <div className="search-container">
      <form onSubmit={ handleSubmit }>
        <input
          onChange={ handleChangeInput }
          type="text"
          value={ input }
          className="input-search"
          data-testid="search-input"
        />
        <section className="radio">
          <label htmlFor="ing">
            Ingredientes:
            <input
              data-testid="ingredient-search-radio"
              type="radio"
              value="ing"
              onChange={ handleChangeRadio }
              name="filter"
              id="ing"
            />
          </label>
          <label htmlFor="name">
            Nome:
            <input
              data-testid="name-search-radio"
              type="radio"
              value="name"
              onChange={ handleChangeRadio }
              name="filter"
              id="name"
            />
          </label>
          <label htmlFor="first">
            Primeira Letra:
            <input
              data-testid="first-letter-search-radio"
              type="radio"
              value="first"
              onChange={ handleChangeRadio }
              id="first"
              name="filter"
            />
          </label>
        </section>
        <button data-testid="exec-search-btn" type="submit">Buscar</button>
      </form>
    </div>
  );
}

export default Search;
