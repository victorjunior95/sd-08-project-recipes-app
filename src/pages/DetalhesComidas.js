import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { requestMealRecipe } from '../services/apiRequests';
import RecommendedDrinks from '../components/RecommendedDrinks';

function DetalhesComidas() {
  const params = useParams();
  const { id } = params;
  const [meal, setMeal] = useState([]);
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const history = useHistory();

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

  if (loading) {
    return (
      <p>Loading</p>
    );
  }
  return (
    <div>
      <h1 data-testid="recipe-title">{meal.strMeal}</h1>
      <img src={ meal.strMealThumb } alt="imagem" data-testid="recipe-photo" />
      <CopyToClipboard
        text={ window.location.href }
        onCopy={ () => setCopied(true) }
      >
        <button type="button" data-testid="share-btn">Compartilhar</button>
      </CopyToClipboard>
      {copied ? <span style={ { color: 'red' } }>Link copiado!</span> : null}
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
      <button
        type="button"
        data-testid="start-recipe-btn"
        className="start"
        onClick={ () => history.push(`/comidas/${meal.idMeal}/in-progress`) }
      >
        Iniciar Receita
      </button>
    </div>
  );
}

export default DetalhesComidas;
