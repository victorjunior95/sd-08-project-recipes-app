import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import LariContext from '../context/Context';

const SearchBar = (props) => {
  const { showInput, typeAPI } = props;
  const [filter, setFilter] = useState('ingredients');
  const [search, setSearch] = useState('');
  const { handleHeaderSearch } = useContext(LariContext);

  return (
    <div>
      { showInput && (<input
        data-testid="search-input"
        onChange={ ({ target }) => setSearch(target.value) }
      />)}

      <label htmlFor="ingredients">
        <input
          name="radios"
          id="ingredients"
          type="radio"
          data-testid="ingredient-search-radio"
          onChange={ () => setFilter('ingredients') }
        />
        Ingrediente
      </label>
      <label htmlFor="name-search">
        <input
          name="radios"
          id="name-search"
          type="radio"
          data-testid="name-search-radio"
          onChange={ () => setFilter('name') }
        />
        Nome
      </label>
      <label htmlFor="first-letter">
        <input
          name="radios"
          id="first-letter"
          type="radio"
          data-testid="first-letter-search-radio"
          onChange={ () => setFilter('firstLetter') }
        />
        Primeira letra
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ () => handleHeaderSearch(search, filter, typeAPI) }
      >
        Buscar
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  showInput: PropTypes.bool.isRequired,
  typeAPI: PropTypes.string.isRequired,
};
export default SearchBar;

// 18 - Exiba um alert caso nenhuma receita seja encontrada
// O alert deve contendo o texto "Sinto muito, não encontramos nenhuma receita para esses filtros."

// O que será verificado:

// - Caso nenhuma comida seja encontrada o alert deve ser exibido
// - Caso nenhuma bebida seja encontrada o alert deve ser exibido
