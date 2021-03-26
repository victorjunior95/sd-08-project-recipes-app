import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { showCompleteLists } from '../../services/api';
import { Card } from '../../components/Card';

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
      <Header name="Explorar Ingredientes" icon="true" />
      <div className="cards">
        {ingredientsList && ingredientsList.filter((ingredient, index) => index <= STOP_INDEX).map((item, index) => (<Card
          key={ item.idIngredient }
          id={ item.idIngredient }
          name={ item.strIngredient }
        />))}
      </div>
      {console.log(ingredientsList[0], ingredientsList[1], ingredientsList[2])}
      <Footer />
    </div>
  );
}

export default ExplorerFoodsIngredients;
