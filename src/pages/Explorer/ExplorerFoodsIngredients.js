import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { showCompleteLists } from '../../services/api';

function ExplorerFoodsIngredients() {
  const [ingredientsList, setIngredientsList] = useState([]);

  useEffect(() => {
    async function requestNSet() {
      const requestList = await showCompleteLists('ingredients', 'Foods');
      setIngredientsList(requestList);
    } requestNSet();
  }, []);
  return (
    <div>
      <Header name="Explorar Ingredientes" icon="true" />
      {console.log(ingredientsList)}
      <Footer />
    </div>
  );
}

export default ExplorerFoodsIngredients;
