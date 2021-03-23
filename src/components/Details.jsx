import React, { useContext } from 'react';
import contextRecipes from '../context/Context';
import createIngredientsArray from '../services/createIngredientsArray';

function Details() {
  const { currentFood } = useContext(contextRecipes);

  console.log(createIngredientsArray(currentFood));

  return (
    <>
      { currentFood.map((food) => (
        <div key={ 0 }>
          <img src={ food.strMealThumb } alt="Thumbnail" />
          <h1>{ food.strMeal }</h1>
          <p>btnCompartilhar</p>
          <p>btnFavorito</p>
          <h6>{ food.strCategory }</h6>
          <h2>Ingredientes</h2>
          <p>{ food.strIngredient1 }</p>
          <h2>Instruções</h2>
          <p>{ food.strInstructions }</p>
          <p>Video</p>
          <p>scrollLateral Recomendadas</p>
          <button type="button">Iniciar Receita</button>
        </div>
      ))}
    </>
  );
}

export default Details;
