import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import MyContext from '../context/MyContext';
import searchIcon from '../images/searchIcon.svg';

function ExploreButton({ title }) {
  const history = useHistory();
  const {
    toggleExplore,
    setToggleExplore,
    setSearchFilter,
    searchFilter,
    setInputSearch,
    inputSearch,
    setApiResponse,
    setCreateCards,
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
    let endPoint;
    let url = { name: 'thecocktaildb', id: 'idDrink', type: 'drinks' };
    let tamanhoResposta;

    if (title === 'Comidas') {
      url = { name: 'themealdb', id: 'idMeal', type: 'meals' };
    }

    if (searchFilter === 'ingredientes') {
      endPoint = `https://www.${url.name}.com/api/json/v1/1/filter.php?i=${inputSearch}`;
    } else if (searchFilter === 'name') {
      endPoint = `https://www.${url.name}.com/api/json/v1/1/search.php?s=${inputSearch}`;
    } else if (searchFilter === 'primeira' && inputSearch.length === 1) {
      endPoint = `https://www.${url.name}.com/api/json/v1/1/search.php?f=${inputSearch}`;
    } else {
      alert('Sua busca deve conter somente 1 (um) caracter');
    }
    let terminatedRequest;
    try {
      const requestApi = await fetch(endPoint);
      const jsonApi = await requestApi.json();
      terminatedRequest = await jsonApi;
      tamanhoResposta = await jsonApi;
    } catch (error) {
      tamanhoResposta = undefined;
    }

    setApiResponse(await terminatedRequest);

    if (!tamanhoResposta || !terminatedRequest[url.type]) {
      alert('Sinto muito, não encontramos nenhuma receita para esses filtros');
    } else if (terminatedRequest[url.type].length === 1) {
      history.push(`/${title.toLowerCase()}/${url.id}`);
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
        <button type="button" data-testid="exec-search-btn" onClick={ requisitarReceitas }>Buscar</button>
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

export default ExploreButton;


