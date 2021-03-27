import { useEffect, useState } from 'react';

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
    console.log('ingredientes comida', ingredientList);
    console.log('quantidades comida', quantitiesList);
    const ingredientAndMeasure = quantitiesList
      .filter((qua) => qua !== null && qua !== '')
      .map((mes, index) => `${mes} ${ingredientList[index]}`);
    return setIngredientsAndMeasuresList(ingredientAndMeasure);
  }

  useEffect(() => {
    async function fetchRecipe(idNum) {
      const result = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idNum}`)
        .then((res) => res.json())
        .then((data) => data);
      const { drinks } = result;
      const currRecipe = drinks[0];
      console.log('receita atual', currRecipe);
      setRecipe(currRecipe);
      createIngredientList(currRecipe);
    }
    fetchRecipe(id);
  }, [id]);
  console.log(recipe);

  const {
    strIBA,
    strDrinkThumb,
    strDrink,
    strCategory,
    strInstructions,
    strAlcoholic } = recipe;

  return [
    setId,
    strIBA,
    strDrinkThumb,
    strDrink,
    strCategory,
    strInstructions,
    ingredientsAndMeasuresList,
    strAlcoholic,
  ];
}

export default useDrinkDetailsHook;
