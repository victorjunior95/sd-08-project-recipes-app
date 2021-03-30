import { useEffect, useState } from 'react';

function useFoodDetailsHook() {
  const [id, setId] = useState();
  const [recipe, setRecipe] = useState({});
  const [ingredientsAndMeasuresList, setIngredientsAndMeasuresList] = useState([]);

  function createIngredientList(receita) {
    const ING_INDEX = 20;
    let ingredientList = [];
    let quantitiesList = [];
    for (let i = 1; i <= ING_INDEX; i += 1) {
      ingredientList = [...ingredientList, receita[`strIngredient${i}`]];
      quantitiesList = [...quantitiesList, receita[`strMeasure${i}`]];
    }
    const ingredientAndMeasure = quantitiesList
      .filter((qua) => qua && qua !== '')
      .map((mes, index) => `${mes} ${ingredientList[index]}`);
    return setIngredientsAndMeasuresList(ingredientAndMeasure);
  }

  useEffect(() => {
    async function fetchRecipe(idNum) {
      const result = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idNum}`)
        .then((res) => res.json())
        .then((data) => data);
      const { meals } = result;
      const currRecipe = meals[0];
      setRecipe(currRecipe);
      createIngredientList(currRecipe);
    }
    fetchRecipe(id);
  }, [id]);

  const {
    strMealThumb,
    strMeal,
    strCategory,
    strInstructions,
    strYoutube,
    strArea,
  } = recipe;

  return [
    setId,
    strMealThumb,
    strMeal,
    strCategory,
    strInstructions,
    strYoutube,
    strArea,
    ingredientsAndMeasuresList,
  ];
}

export default useFoodDetailsHook;
