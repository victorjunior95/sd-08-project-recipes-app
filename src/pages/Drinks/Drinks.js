import React, { useContext, useEffect, useState } from 'react';
import Header from '../../component/Header';
import Context from '../../context/Context';
import getApi from '../../services/apiRequests';

export default function Drinks() {
  const { searchParams } = useContext(Context);
  const [drinks, setDrinks] = useState([]);

  const { searchInput, selectedParameter } = searchParams;
  console.log(drinks);

  useEffect(() => {
    switch (selectedParameter) {
    case 'ingredient':
      getApi(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchInput}`, 'meals')
        .then((recipes) => setDrinks(recipes));
      break;
    case 'name':
      getApi(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`, 'meals')
        .then((recipes) => setDrinks(recipes));
      break;
    case 'first-letter':
      getApi(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchInput}`, 'meals')
        .then((recipes) => setDrinks(recipes));
      break;
    default:
      break;
    }
  }, [searchInput, selectedParameter]);
  return (
    <Header pageTitle="Bebidas" />
  );
}
