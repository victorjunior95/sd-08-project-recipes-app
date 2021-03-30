import { useEffect, useState } from 'react';
import { getDrinkFiltredById } from '../../services/api';

function useDrinkDetailsHook() {
  const [id, setId] = useState();
  const [recipe, setRecipe] = useState({});
  const [ingredientsAndMeasuresList, setIngredientsAndMeasuresList] = useState([]);

  function createIngredientList(receita) {
    const ING_INDEX = 15;
    let ingredientList = [];
    let quantitiesList = [];
    for (let i = 1; i <= ING_INDEX; i += 1) {
      ingredientList = [...ingredientList, receita[`strIngredient${i}`]];
      quantitiesList = [...quantitiesList, receita[`strMeasure${i}`]];
    }
    const ingredientAndMeasure = quantitiesList
      .filter((qua) => qua !== null && qua !== '')
      .map((mes, index) => `${mes} ${ingredientList[index]}`);
    return setIngredientsAndMeasuresList(ingredientAndMeasure);
  }

  useEffect(() => {
    async function fetchRecipe(idNum) {
      const currRecipe = await getDrinkFiltredById(idNum);
      console.log('receita atual', currRecipe);
      setRecipe(currRecipe);
      createIngredientList(currRecipe);
    }
    fetchRecipe(id);
  }, [id]);

  const {
    strDrinkThumb,
    strDrink,
    strCategory,
    strInstructions,
    strAlcoholic } = recipe;

  return [
    setId,
    strDrinkThumb,
    strDrink,
    strCategory,
    strInstructions,
    strAlcoholic,
    ingredientsAndMeasuresList,
  ];
}

export default useDrinkDetailsHook;
