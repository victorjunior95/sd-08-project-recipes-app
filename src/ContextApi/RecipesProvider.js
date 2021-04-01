import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';
import fetchFood from '../services/FoodApi';
import fetchDrink from '../services/CocktailApi';
import fetchCategories from '../services/FoodCategoriesApi';
import fetchCocktailCategories from '../services/CocktailCategoriesApi';

const searchParams = {
  selectedParam: '',
  inputSearch: '',
  id: '',
};

function RecipesProvider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [cocktails, setCocktails] = useState([]);
  const [FoodCategories, setCategories] = useState([]);
  const [DrinkCategories, setDrinkCategories] = useState([]);
  const [searchParam, setSearchParam] = useState(searchParams);
  const [recipeDetails, setRecipeDetails] = useState();

  const handleEmail = ({ target: { value } }) => {
    setEmail(value);
  };

  const handlePassword = ({ target: { value } }) => {
    setPassword(value);
  };

  useEffect(() => {
    const { selectedParam, inputSearch, id } = searchParam;

    switch (selectedParam) {
    case 'ingredient':
      fetchFood(`filter.php?i=${inputSearch}`)
        .then((response) => setRecipes(response));
      break;
    case 'name':
      fetchFood(`search.php?s=${inputSearch}`)
        .then((response) => setRecipes(response));
      break;
    case 'first-letter':
      fetchFood(`search.php?f=${inputSearch}`)
        .then((response) => setRecipes(response));
      break;
    case 'food-details':
      fetchFood(`lookup.php?i=${id}`)
        .then((response) => setRecipeDetails(response.meals[0]));
      break;
    default:
      fetchFood('search.php?s=').then((response) => setRecipes(response));
      break;
    }
  }, [searchParam]);

  useEffect(() => {
    const { selectedParam, inputSearch, id } = searchParam;

    switch (selectedParam) {
    case 'ingredient':
      fetchDrink(`filter.php?i=${inputSearch}`)
        .then((response) => setCocktails(response));
      break;
    case 'name':
      fetchDrink(`search.php?s=${inputSearch}`)
        .then((response) => setCocktails(response));
      break;
    case 'first-letter':
      fetchDrink(`search.php?f=${inputSearch}`)
        .then((response) => setCocktails(response));
      break;
    case 'drink-details':
      fetchDrink(`lookup.php?i=${id}`)
        .then((response) => setRecipeDetails(response.drinks[0]));
      break;
    default:
      fetchDrink('search.php?s=').then((response) => setCocktails(response));
      break;
    }
  }, [searchParam]);

  useEffect(() => {
    fetchCategories().then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    fetchCocktailCategories().then((data) => setDrinkCategories(data));
  }, []);

  const provide = {
    email,
    password,
    handleEmail,
    handlePassword,
    searchParam,
    setSearchParam,
    recipes,
    setRecipes,
    cocktails,
    setCocktails,
    FoodCategories,
    DrinkCategories,
    recipeDetails,
  };

  return (
    <RecipesContext.Provider value={ provide }>
      {children}
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecipesProvider;
