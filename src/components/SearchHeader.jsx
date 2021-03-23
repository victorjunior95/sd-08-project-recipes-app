import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionFilteredFoods } from '../redux/actions';
import {
  requestByName,
  requestByIngredient,
  requestByFirstLetter,
} from '../services/requestFoodsAPI';

function SearchHeader() {
  const [searchText, setSearchText] = useState('');
  const [filterRadio, setFilterRadio] = useState('');
  const dispatch = useDispatch();

  const handleChangeInput = ({ target: { value } }) => {
    setSearchText(value);
  };

  const handleChangeRadio = ({ currentTarget: { value } }) => {
    setFilterRadio(value);
  };
  /* eslint-disable */
  const onClick = async () => {
    if (searchText === '') {
      alert('Digite alguma coisa!');
    } else if (filterRadio === 'ingredient') {
      const foods = await requestByIngredient(searchText);
      dispatch(actionFilteredFoods(foods));
    } else if (filterRadio === 'name') {
      const foods = await requestByName(searchText);
      dispatch(actionFilteredFoods(foods));
    } else if (filterRadio === 'first-letter') {
      const foods = await requestByFirstLetter(searchText);
      dispatch(actionFilteredFoods(foods));
    } else {
      alert('Escolha uma opção!');
    }
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Buscar Receita"
        data-testid="search-input"
        onChange={ handleChangeInput }
      />
      <label htmlFor="ingredient">
        Ingrediente
        <input
          type="radio"
          name="search"
          data-testid="ingredient-search-radio"
          value="ingredient"
          onChange={ handleChangeRadio }
        />
      </label>
      <label htmlFor="name">
        Nome
        <input
          type="radio"
          name="search"
          data-testid="name-search-radio"
          value="name"
          onChange={ handleChangeRadio }
        />
      </label>
      <label htmlFor="first-letter">
        Primeira letra
        <input
          type="radio"
          name="search"
          data-testid="first-letter-search-radio"
          value="first-letter"
          onChange={ handleChangeRadio }
        />
      </label>
      <button type="button" data-testid="exec-search-btn" onClick={ onClick }>
        Buscar
      </button>
    </form>
  );
}

export default SearchHeader;
