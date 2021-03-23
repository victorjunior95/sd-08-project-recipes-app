import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import MyContext from '../context/MyContext';
import searchIcon from '../images/searchIcon.svg';
import requestApi from '../services/requestApi';
import PropTypes from 'prop-types';

function ExploreButton({ title }) {
  const history = useHistory();
  const {
    toggleExplore,
    setToggleExplore,
    setSearchFilter,
    setInputSearch,
    setApiResponse,
    setCreateCards,
    searchFilter,
    inputSearch,
  } = useContext(MyContext);

  function changeToggle() {
    setToggleExplore(!toggleExplore);
  }

  function changeSearchFilter({ target }) {
    setSearchFilter(target.value);
  }

  function changeInputSearch({ target }) {
    setInputSearch(target.value);
  }

  async function requisitarReceitas() {
    let url = { name: 'thecocktaildb', id: 'idDrink', type: 'drinks' };

    if (title === 'Comidas') {
      url = { name: 'themealdb', id: 'idMeal', type: 'meals' };
    }

    const {
      tamanhoResposta,
      terminatedRequest,
    } = await requestApi(url, searchFilter, inputSearch);

    setApiResponse(terminatedRequest);

    if (!tamanhoResposta || !terminatedRequest[url.type]) {
      alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    } else if (terminatedRequest[url.type].length === 1) {
      console.log(terminatedRequest[url.type][0][url.id]);
      history.push(`/${title.toLowerCase()}/${terminatedRequest[url.type][0][url.id]}`);
    } else {
      setCreateCards(true);
    }
  }

  function renderInput() {
    return (
      <>
        <input
          type="text"
          placeholder="Buscar Receita"
          data-testid="search-input"
          onChange={ changeInputSearch }
        />
        <label htmlFor="ingredients">
          Ingredientes
          <input
            type="radio"
            value="ingredientes"
            name="ingredientes"
            id="ingredients"
            onChange={ changeSearchFilter }
            data-testid="ingredient-search-radio"
          />
        </label>
        <label htmlFor="nome">
          Nome
          <input
            type="radio"
            value="name"
            name="ingredientes"
            id="nome"
            onChange={ changeSearchFilter }
            data-testid="name-search-radio"
          />
        </label>
        <label htmlFor="primeira">
          Primeira Letra
          <input
            type="radio"
            value="primeira"
            name="ingredientes"
            id="primeira"
            onChange={ changeSearchFilter }
            data-testid="first-letter-search-radio"
          />
        </label>
        <button
          type="button"
          data-testid="exec-search-btn"
          onClick={ requisitarReceitas }
        >
          Buscar
        </button>
      </>
    );
  }

  return (
    <>
      <button type="button" onClick={ changeToggle }>
        <img src={ searchIcon } alt="Search" data-testid="search-top-btn" />
      </button>
      { toggleExplore ? renderInput() : null }
    </>
  );
}

ExploreButton.propTypes = {
  title: PropTypes.string.isRequired,
  toLowerCase: PropTypes.func.isRequired,
};

export default ExploreButton;
