import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { requestDrinkRecipe } from '../services/apiRequests';

function DetalhesBebidas() {
  const params = useParams();
  const { id } = params;
  const [drink, setDrink] = useState([]);
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(true);

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
    return aux.filter((i) => i.ingredient !== null);
  };

  useEffect(() => {
    async function requestById() {
      console.log('teste', id);
      const clickedRecipe = await requestDrinkRecipe(id);
      console.log('clickedRecipe:', clickedRecipe);
      setDrink(clickedRecipe[0]);
      setRecipe(parseRecipe(clickedRecipe[0]));
      setLoading(false);
    }
    requestById();
  }, [id]);

  console.log('teste drink array:', drink[0]);
  // console.log('acessando chaves do objeto meal:', meal && meal.length && meal[0].strMealThumb);

  if (loading) {
    return (
      <p>Loading</p>
    );
  }
  return (
    <div>
      <h1 data-testid="recipe-title">{drink.strDrink}</h1>
      <img src={ drink.strDrinkThumb } alt="imagem" data-testid="recipe-photo" />
      <button type="button" data-testid="share-btn">
        Compartilhar
      </button>
      <button type="button" data-testid="favorite-btn">
        Adicionar aos favoritos
      </button>
      <p data-testid="recipe-category">
        { drink.strAlcoholic }
      </p>
      <ul>
        { recipe.map((item, index) => (
          <li data-testid={ `${index}-ingredient-name-and-measure` } key={ index }>
            <span>{ `${item.measure} ${item.ingredient}` }</span>
          </li>
        ))}
      </ul>
      <p data-testid="instructions">
        { drink.strInstructions }
      </p>
      <video src={ drink.strYoutube } data-testid="video" controls>
        <track kind="captions" />
      </video>
      <div>
        <p data-testid="0-recomendation-card">Recomendação</p>
      </div>
      <button type="button" data-testid="start-recipe-btn">
        Iniciar Receita
      </button>
    </div>
  );
}

export default DetalhesBebidas;
