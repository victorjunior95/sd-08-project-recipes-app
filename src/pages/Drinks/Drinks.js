import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Header from '../../component/Header';
import Context from '../../context/Context';
import getApi from '../../services/apiRequests';

export default function Drinks() {
  const { searchParams } = useContext(Context);
  const [drinks, setDrinks] = useState([]);
  const history = useHistory();

  const { searchInput, selectedParameter } = searchParams;

  useEffect(() => {
    switch (selectedParameter) {
    case 'ingredient':
      getApi(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchInput}`, 'drinks')
        .then((recipes) => setDrinks(recipes));
      break;
    case 'name':
      getApi(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`, 'drinks')
        .then((recipes) => setDrinks(recipes));
      break;
    case 'first-letter':
      getApi(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchInput}`, 'drinks')
        .then((recipes) => setDrinks(recipes));
      break;
    default:
      break;
    }
  }, [searchInput, selectedParameter]);

  useEffect(() => {
    if (drinks.length === 1) {
      history.push(`/bebidas/${drinks[0].idDrink}`);
    }
  }, [drinks, history]);

  return (
    <Header pageTitle="Bebidas" />
  );
}
