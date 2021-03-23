import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import getResultFromAPI from '../api/getResultFromAPI';
import contextRecipes from '../context/Context';
import Button from '../components/Button';
import Footer from '../components/Footer';

const Bebidas = () => {
  const [drinks, setDrinks] = useState([]);
  const [targetButton, setTargetButton] = useState('');
  const { filter, drinksCategories } = useContext(contextRecipes);
  const history = useHistory();

  useEffect(() => {
    async function getDrinksFromAPI() {
      const drinksAPI = await getResultFromAPI('/bebidas');
      console.log(drinksAPI);
      setDrinks(drinksAPI);
    }
    getDrinksFromAPI();
  }, []);

  useEffect(() => {
    setDrinks(filter);
  }, [filter]);

  const filterByCategory = async (category, { target: { innerHTML } }) => {
    let filterdBtn;
    if (innerHTML !== targetButton) {
      filterdBtn = await getResultFromAPI('/bebidas', 'filterBy', category);
      setTargetButton(innerHTML);
    } else {
      filterdBtn = await getResultFromAPI('/bebidas');
      setTargetButton('');
    }
    setDrinks(filterdBtn);
  };

  return (
    <>
      <Header title="Bebidas" />
      { drinksCategories.map(({ strCategory: category }, index) => (
        <Button
          datatestid={ `${category}-category-filter` }
          label={ category }
          key={ index }
          onClick={ (event) => filterByCategory(category, event) }
        />
      ))}
      { drinks.map((drink, index) => (
        <div data-testid={ `${index}-recipe-card` } key={ drink.strDrink }>
          <input
            type="image"
            data-testid={ `${index}-card-img` }
            src={ drink.strDrinkThumb }
            alt="bebida"
            width="100%"
            onClick={ () => history.push(`/bebidas/${drink.idDrink}`) }
          />
          <p data-testid={ `${index}-card-name` }>{ drink.strDrink }</p>
        </div>
      ))}
      <Footer />
    </>
  );
};

export default Bebidas;
