import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function FoodDetails(props) {
  const [recipe, setRecipe] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const { match: { params: { id } } } = props;

  useEffect(() => {
    async function fetchRecipe(idNum) {
      const { meals } = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idNum}`)
        .then((res) => res.json());
      setRecipe(meals[0]);
    }
    fetchRecipe(id);
  }, [id]);

  const { strMealThumb, strMeal, strCategory, strInstructions, strYoutube } = recipe;
  console.log(strYoutube);
  return (
    <div>
      <h2 data-testid="recipe-title">{ strMeal }</h2>
      <span data-testid="recipe-category">{ strCategory }</span>
      <img data-testid="recipe-photo" src={ strMealThumb } alt="Recipe pic" />
      <iframe
        width="560"
        height="315"
        src={ strYoutube }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
        allowFullScreen
      />
      <p data-testid="instructions">{ strInstructions }</p>
      <button type="button" data-testid="share-btn">Compartilhar</button>
      <button type="button" data-testid="favorite-btn">Favoritar</button>
      <button type="button" data-testid="start-recipe-btn">Iniciar</button>
    </div>
  );
}

FoodDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default FoodDetails;
