import React, { createContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getMealByIngredients, getMealByName, getMealByFirstLetter,
  getDrinkByIngredients, getDrinkByName, getDrinkByFirstLetter,
} from '../services/getAPIs';

export const DataContext = createContext();

function DataProvider(props) {
  const history = useHistory();
  const [ingredientSearchRadio, setIngredientSearchRadio] = useState(false);
  const [nameSearchRadio, setNameSearchRadio] = useState(false);
  const [firstLetterSearchRadio, setFirstLetterSearchRadio] = useState(false);
  const [ingredientSearchRadioDrink, setIngredientSearchRadioDrink] = useState(false);
  const [nameSearchRadioDrink, setNameSearchRadioDrink] = useState(false);
  const [firstLetterSearchRadioDrink, setFirstLetterSearchRadioDrink] = useState(false);
  const [meals, setMeals] = useState([]);
  // const [categoriesMeals, setCategoriesMeals] = useState([]);
  // const [categoriesDrinks, setCategoriesDrinksMeals] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [searchInputMeal, setSearchInputMeal] = useState([]);
  const [searchInputDrink, setSearchInputDrink] = useState([]);
  const [data, setData] = useState({ email: '', password: '' });
  const [tokens, setTokens] = useState({ mealsToken: '', cocktailsToken: '' });

  useEffect(() => {
    async function fetchDataMeal() {
      const initialContentMeal = await getMealByIngredients('');
      setMeals(initialContentMeal);
    }
    fetchDataMeal();
    async function fetchDataDrinks() {
      const initialContentDrink = await getDrinkByIngredients('vodka');
      setDrinks(initialContentDrink);
    }
    fetchDataDrinks();
  }, []);

  const handleChangeEmail = (e) => {
    setData({ ...data, email: e });
  };

  const handleChangePassword = (e) => {
    setData({ ...data, password: e });
    setTokens({
      ...tokens,
      mealsToken: 1,
      cocktailsToken: 1,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { mealsToken, cocktailsToken } = tokens;
    const { email: emailToSave } = data;
    const email = { email: emailToSave };
    localStorage.setItem('mealsToken', JSON.stringify(mealsToken));
    localStorage.setItem('cocktailsToken', JSON.stringify(cocktailsToken));
    localStorage.setItem('user', JSON.stringify(email));
    history.push('/comidas');
  };
  const handleSearchByIngredients = () => {
    setIngredientSearchRadio(!ingredientSearchRadio);
    if (nameSearchRadio) setNameSearchRadio(!nameSearchRadio);
    if (firstLetterSearchRadio) setFirstLetterSearchRadio(!firstLetterSearchRadio);
  };

  const handleSearchByName = () => {
    setNameSearchRadio(!nameSearchRadio);
    if (ingredientSearchRadio) setIngredientSearchRadio(!ingredientSearchRadio);
    if (firstLetterSearchRadio) setFirstLetterSearchRadio(!firstLetterSearchRadio);
  };

  const handleSearchByFirstLetter = () => {
    setFirstLetterSearchRadio(!firstLetterSearchRadio);
    if (ingredientSearchRadio) setIngredientSearchRadio(!ingredientSearchRadio);
    if (nameSearchRadio) setNameSearchRadio(!nameSearchRadio);
  };

  const handleSearchByIngredientsDrink = () => {
    setIngredientSearchRadioDrink(!ingredientSearchRadioDrink);
    if (nameSearchRadioDrink) setNameSearchRadioDrink(!nameSearchRadioDrink);
    if (firstLetterSearchRadioDrink) {
      setFirstLetterSearchRadioDrink(!firstLetterSearchRadioDrink);
    }
  };

  const handleSearchByNameDrink = () => {
    setNameSearchRadioDrink(!nameSearchRadioDrink);
    if (ingredientSearchRadioDrink) {
      setIngredientSearchRadioDrink(!ingredientSearchRadioDrink);
    }
    if (firstLetterSearchRadioDrink) {
      setFirstLetterSearchRadioDrink(!firstLetterSearchRadioDrink);
    }
  };

  const handleSearchByFirstLetterDrink = () => {
    setFirstLetterSearchRadioDrink(!firstLetterSearchRadioDrink);
    if (ingredientSearchRadioDrink) {
      setIngredientSearchRadioDrink(!ingredientSearchRadioDrink);
    }
  };

  const handleChangeSearch = (e) => { setSearchInputMeal(e); };
  const handleChangeSearchDrink = (e) => { setSearchInputDrink(e); };

  const handleClickSearch = async () => {
    if (nameSearchRadio) {
      const res = await getMealByName(searchInputMeal);
      if (res === null) {
        alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
        return null;
      }
      if (res.length === 1) {
        const onlyMeal = [res[0]];
        onlyMeal.map((item) => history.push(`/comidas/${item.idMeal}`));
      }
      setMeals(res);
    }
    if (!!firstLetterSearchRadio && searchInputMeal.length === 1) {
      const res = await getMealByFirstLetter(searchInputMeal);
      setMeals(res);
    }
    if (!!firstLetterSearchRadio && searchInputMeal.length !== 1) {
      alert('Sua busca deve conter somente 1 (um) caracter');
    }
    if (ingredientSearchRadio) {
      const res = await getMealByIngredients(searchInputMeal);
      setMeals(res);
    }
  };

  const handleClickSearchDrink = async () => {
    if (nameSearchRadioDrink) {
      const res = await getDrinkByName(searchInputDrink);
      if (res === null) {
        alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
        return null;
      }
      if (res.length === 1) {
        const onlyDrink = [res[0]];
        onlyDrink.map((item) => history.push(`/bebidas/${item.idDrink}`));
      }
      setDrinks(res);
    }
    if (!!firstLetterSearchRadioDrink && searchInputDrink.length === 1) {
      const res = await getDrinkByFirstLetter(searchInputDrink);
      setDrinks(res);
    }
    if (!!firstLetterSearchRadioDrink && searchInputDrink.length !== 1) {
      alert('Sua busca deve conter somente 1 (um) caracter');
    }
    if (ingredientSearchRadioDrink) {
      const res = await getDrinkByIngredients(searchInputDrink);
      setDrinks(res);
    }
  };

  const checkValidity = () => {
    const lengthOfPwd = 6;
    const { email, password } = data;
    if (password.length > lengthOfPwd
      && /^[A-Za-z0-9.-]+@[A-Za-z0-9]+(\.[A-Za-z]{3}|\.[A-Za-z]{3}\.[A-Za-z]{2})$/.test(
        email,
      )

    ) return false;
    return true;
  };
  const { children } = props;
  return (
    <div>
      <DataContext.Provider
        value={ {
          handleChangeEmail,
          handleChangePassword,
          handleSubmit,
          checkValidity,
          handleChangeSearch,
          handleChangeSearchDrink,
          handleSearchByIngredients,
          handleSearchByFirstLetter,
          handleSearchByName,
          handleSearchByIngredientsDrink,
          handleSearchByFirstLetterDrink,
          handleSearchByNameDrink,
          handleClickSearch,
          handleClickSearchDrink,
          nameSearchRadio,
          ingredientSearchRadio,
          firstLetterSearchRadio,
          nameSearchRadioDrink,
          ingredientSearchRadioDrink,
          firstLetterSearchRadioDrink,
          searchInputMeal,
          searchInputDrink,
          data,
          tokens,
          meals,
          // categoriesMeals,
          drinks,
          // categoriesDrinks,
        } }
      >
        {children}
      </DataContext.Provider>
    </div>
  );
}
export default DataProvider;
DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
