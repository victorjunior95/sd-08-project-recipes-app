import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import fetchMealActionId from '../redux/actions/fetchMealId';
import fetchDrinkActionId from '../redux/actions/fetchDrink';
import ShareButton from '../components/ShareButton';
import LikeButton from '../components/LikeButton';

function FoodDetail() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const arrayId = pathname.split('/')[2];
  const arrayRecipes = pathname.split('/')[1];

  const idMeat = useSelector((state) => state.recipes.recipes);

  useEffect(() => {
    let fetchData = '';
    if (arrayRecipes === 'comidas') {
      fetchData = (id) => dispatch(fetchMealActionId(id));
    }
    if (arrayRecipes === 'bebidas') {
      fetchData = (id) => dispatch(fetchDrinkActionId(id));
    }
    fetchData(arrayId);
  }, [dispatch, arrayId, arrayRecipes]);

  const arrayMeat = idMeat[0];

  const findKey = (value) => Object.entries(arrayMeat).map((nome) => {
    if (nome[0].includes(value)) {
      return nome[1];
    }
    return undefined;
  }).filter((element) => element !== undefined);

  const createIngrediets = () => {
    const ingredient = findKey('strIngredient');
    const measure = findKey('strMeasure');
    return ingredient.map((nome, index) => {
      if (nome) {
        return (
          <p
            data-testid={ `${index}-ingredient-name-and-measure` }
            key={ index }
          >
            {`${nome} - ${measure[index]}`}
          </p>
        );
      }
      return undefined;
    });
  };

  const renderMeal = () => (
    arrayMeat !== undefined && (
      <div>
        {
          arrayRecipes === 'comidas'
            ? <img data-testid="recipe-photo" src={ arrayMeat.strMealThumb } alt="img" />
            : <img data-testid="recipe-photo" src={ arrayMeat.strDrinkThumb } alt="img" />
        }
        <ShareButton recipeId={ arrayMeat.idMeal } recipeType="comida" />
        <LikeButton recipe={ arrayMeat } />
        {
          arrayRecipes === 'comidas'
            ? <h1 data-testid="recipe-title">{arrayMeat.strMeal}</h1>
            : <h1 data-testid="recipe-title">{arrayMeat.strDrink}</h1>
        }
        {arrayRecipes === 'bebidas'
        && <p data-testid="recipe-category">{arrayMeat.strAlcoholic}</p> }
        <p data-testid="recipe-category">{arrayMeat.strCategory}</p>
        Ingredients
        {createIngrediets()}
        Instructions
        <p data-testid="instructions">{arrayMeat.strInstructions}</p>
        Video
        {
          arrayRecipes === 'comidas'
          && <iframe
            title="Meat"
            data-testid="video"
            width="420"
            height="315"
            src={ arrayMeat.strYoutube.replace('watch?v=', 'embed/') }
          />
        }
        Recomendadas
        <p data-testid="0-recomendation-card">{arrayMeat.strDrinkAlternate}</p>
        <button data-testid="start-recipe-btn" type="button">Iniciar Receita</button>
      </div>
    ));

  return (
    <main>
      <div>
        {renderMeal()}
      </div>
    </main>
  );
}

export default FoodDetail;
