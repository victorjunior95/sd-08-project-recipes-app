import { ADD_CATEGORIES, ADD_FILTER, ADD_RECIPES,
  ADD_RECOMMENDATIONS, REQUEST_RECIPES } from './index';

const addRecipes = (payload) => ({
  type: ADD_RECIPES,
  payload,
});

const requestRecipes = () => ({
  type: REQUEST_RECIPES,
});

const addFilter = (payload) => ({
  type: ADD_FILTER,
  payload,
});

export const fetchRecipes = (token, type = 'meals',
  { request = 'search', key = 's', parameter = '' } = {}) => (
  async (dispatch) => {
    const filter = request === 'filter' ? parameter : '';
    dispatch(addFilter(filter));
    dispatch(requestRecipes());
    const domains = { meals: 'themealdb', drinks: 'thecocktaildb' };
    let url = `https://www.${domains[type]}.com/api/json/v1/${token}/${request}.php?${key}=${parameter}`;
    if (!key) url = `https://www.${domains[type]}.com/api/json/v1/${token}/${request}.php`;
    const data = await fetch(url);
    const { [type]: recipes } = await data.json();
    dispatch(addRecipes(recipes));
  }
);

const addCategories = (payload) => ({
  type: ADD_CATEGORIES,
  payload,
});

export const fetchCategories = (token, type = 'meals') => (
  async (dispatch) => {
    const urlOpt = { meals: `https://www.themealdb.com/api/json/v1/${token}/list.php?c=list`,
      drinks: `https://www.thecocktaildb.com/api/json/v1/${token}/list.php?c=list` };
    const data = await fetch(urlOpt[type]);
    const { [type]: categories } = await data.json();
    const CATEGORIES_NUMBER = 5;
    const categoriesArray = categories.slice(0, CATEGORIES_NUMBER)
      .map(({ strCategory }) => strCategory);
    dispatch(addCategories(categoriesArray));
  }
);

const addRecommendations = (payload) => ({
  type: ADD_RECOMMENDATIONS,
  payload,
});

export const fetchRecommendations = (token, type = 'meals') => (
  async (dispatch) => {
    const domains = { meals: 'themealdb', drinks: 'thecocktaildb' };
    const url = `https://www.${domains[type]}.com/api/json/v1/${token}/search.php?s=`;
    const data = await fetch(url);
    const { [type]: recipes } = await data.json();
    dispatch(addRecommendations(recipes));
  }
);
