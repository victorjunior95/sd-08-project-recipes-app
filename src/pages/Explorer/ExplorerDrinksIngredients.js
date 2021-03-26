import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import IngredientCard from '../../components/Card/IngredientCard';
import { showCompleteLists } from '../../services/api';

function ExplorerDrinksIngredients() {
  const STOP_INDEX = 11;
  const [ingredientsList, setIngredientsList] = useState([]);

  useEffect(() => {
    async function requestNSet() {
      const requestList = await showCompleteLists('ingredients', 'Drinks');
      setIngredientsList(requestList.drinks);
    } requestNSet();
  }, []);

  return (
    <div>
      <Header name="Explorar Ingredientes" icon="true" currentPage="Drinks" />
      <div className="cards">
        {ingredientsList && ingredientsList
          .filter((ingredient, index) => index <= STOP_INDEX)
          .map((item, index) => (
            <IngredientCard
              key={ index }
              id={ item.strIngredient1 }
              name={ item.strIngredient1 }
              img={ `https://www.thecocktaildb.com/images/ingredients/${item.strIngredient1}-Small.png` }
              index={ index }
              onClick={ () => console.log('Ok') }
            />
          ))}
      </div>
      {console.log(ingredientsList)}
      <Footer />
    </div>
  );
}

export default ExplorerDrinksIngredients;
