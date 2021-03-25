import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { requestMealRecipe } from '../services/apiRequests';
import RecommendedDrinks from '../components/RecommendedDrinks';

function DetalhesComidas() {
  const params = useParams();
  const { id } = params;
  const [meal, setMeal] = useState([]);
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [ingredientList, setIngredientList] = useState([]);

  // console.log(params.id);

  const parseRecipe = (data) => {
    const aux = Object.entries(data).reduce((acc, cur) => {
      if (cur[0].startsWith('strIngredient')) {
        const both = cur[0].split('strIngredient').join('strMeasure');
        acc.push({
          ingredient: cur[1],
          measure: data[both],
        });
      }
      return acc;
    }, []);
    return aux.filter((i) => i.ingredient !== '');
  };

  useEffect(() => {
    async function requestById() {
      console.log('teste', id);
      const clickedRecipe = await requestMealRecipe(id);
      console.log('clickedRecipe:', clickedRecipe);
      setMeal(clickedRecipe[0]);
      setRecipe(parseRecipe(clickedRecipe[0]));
      setLoading(false);
      console.log(clickedRecipe[0]);
    }
    requestById();
  }, [id]);

  // console.log('teste meal array:', meal[0]);
  // console.log('acessando chaves do objeto meal:', meal && meal.length && meal[0].strMealThumb);

  if (loading) {
    return (
      <p>Loading</p>
    );
  }
  return (
    <div>
      <h1 data-testid="recipe-title">{meal.strMeal}</h1>
      <img src={ meal.strMealThumb } alt="imagem" data-testid="recipe-photo" />
      <button type="button" data-testid="share-btn">
        Compartilhar
      </button>
      <button type="button" data-testid="favorite-btn">
        Adicionar aos favoritos
      </button>
      <p data-testid="recipe-category">
        { meal.strCategory }
      </p>
      <ul>
        { recipe.map((item, index) => (
          <li data-testid={ `${index}-ingredient-name-and-measure` } key={ index }>
            <span>{ `${item.measure} ${item.ingredient}` }</span>
          </li>
        ))}
      </ul>
      <p data-testid="instructions">
        { meal.strInstructions }
      </p>
      <video src={ meal.strYoutube } data-testid="video" controls>
        <track kind="captions" />
      </video>
      <RecommendedDrinks />
      <button type="button" data-testid="start-recipe-btn" className="start">
        Iniciar Receita
      </button>
    </div>
  );
}

// const [allMeals, setAllMeals] = useState([]);
// const MAX_INDEX = 11;
// useEffect(() => {
//   async function requestRecipes() {
//     const meals = await requestRecipesList();
//     setAllMeals(meals);
//   }
//   requestRecipes();
// }, []);

// https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772

export default DetalhesComidas;
