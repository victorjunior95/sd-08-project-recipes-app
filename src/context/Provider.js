import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './MyContext';
import firstRequest from '../services/firstRequest';
import categoryRequest from '../services/categoryRequest';

function Provider({ children }) {
  const [userEmail, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [toggleExplore, setToggleExplore] = useState(false);
  const [toggleCategoryFilter, setToggleCategoryFilter] = useState(false);
  const [searchFilter, setSearchFilter] = useState('');
  const [inputSearch, setInputSearch] = useState('');
  const [createCards, setCreateCards] = useState(false);
  const [apiResponse, setApiResponse] = useState([]);
  const [type, setType] = useState({ item: 'item', palavra: 'palavra' });
  const [comidas, setComidas] = useState([]);
  const [bebidas, setBebidas] = useState([]);
  const [categoryComidas, setCategoryComidas] = useState([]);
  const [categoryBebidas, setCategoryBebidas] = useState([]);
  const [recipe, setRecipe] = useState({});
  const [recomendados, setRecomendados] = useState([]);
  const [renderRec, setRenderRec] = useState(false);
  const [renderButtonComparison, setRenderButtonComparison] = useState(false);
  const contextValue = {
    userEmail,
    setEmail,
    password,
    setPassword,
    toggleExplore,
    setToggleExplore,
    searchFilter,
    setSearchFilter,
    inputSearch,
    setInputSearch,
    createCards,
    setCreateCards,
    apiResponse,
    setApiResponse,
    type,
    setType,
    comidas,
    setComidas,
    bebidas,
    setBebidas,
    categoryComidas,
    setCategoryComidas,
    categoryBebidas,
    setCategoryBebidas,
    toggleCategoryFilter,
    setToggleCategoryFilter,
    recipe,
    setRecipe,
    recomendados,
    setRecomendados,
    renderRec,
    setRenderRec,
    renderButtonComparison,
    setRenderButtonComparison,
  };

  useEffect(async () => {
    const { comidasApi, bebidasApi } = await firstRequest();
    setComidas(comidasApi.meals);
    setBebidas(bebidasApi.drinks);
    setCreateCards(true);
    const { categoryComidasApi, categoryBebidasApi } = await categoryRequest();
    setCategoryComidas(categoryComidasApi.meals);
    setCategoryBebidas(categoryBebidasApi.drinks);
  }, []);

  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>);
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.objectOf(
    PropTypes.any,
  ).isRequired,
};
