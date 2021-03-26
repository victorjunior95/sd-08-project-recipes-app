import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { showCompleteLists } from '../../services/api';
import IngredientCard from '../../components/Card/IngredientCard';

function ExplorerFoodsIngredients() {
  const STOP_INDEX = 11;
  const [ingredientsList, setIngredientsList] = useState([]);

  useEffect(() => {
    async function requestNSet() {
      const requestList = await showCompleteLists('ingredients', 'Foods');
      setIngredientsList(requestList.meals);
    } requestNSet();
  }, []);

  return (
    <div>
      <Header name="Explorar Ingredientes" icon="true" currentPage="Foods" />
      <div className="cards">
        {ingredientsList && ingredientsList
          .filter((ingredient, index) => index <= STOP_INDEX)
          .map((item, index) => (
            <IngredientCard
              key={ item.idIngredient }
              id={ item.idIngredient }
              name={ item.strIngredient }
              img={ `https://www.themealdb.com/images/ingredients/${item.strIngredient}-Small.png` }
              index={ index }
              onClick={ () => console.log('Ok') }
            />
          ))}
      </div>
      {console.log(ingredientsList[0], ingredientsList[1], ingredientsList[2])}
      <Footer />
    </div>
  );
}

export default ExplorerFoodsIngredients;
