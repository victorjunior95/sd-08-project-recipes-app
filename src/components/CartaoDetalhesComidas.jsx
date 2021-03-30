import React, { useContext } from 'react';
import ContextReceitas from '../context/ContextReceitas';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import Botao from './Botao';
import Imagem from './Imagem';
import shareIcon from '../images/shareIcon.svg';

function CartaoDetalhesComidas() {
  const { detalhesComidas } = useContext(ContextReceitas);
  //Victor agorea funciona não altera esa arquivo!

  return (
    <>
      <Imagem
        testid="recipe-photo"
        src={ detalhesComidas.strMealThumb }
        alt={ detalhesComidas.strMeal }
      />
      <h1 data-testid="recipe-title">{ detalhesComidas.strMeal }</h1>
      <Botao testid="share-btn" tipo="Compartilhar" src={ shareIcon } />
      <Botao testid="favorite-btn" tipo="Favoritar" src={ blackHeartIcon } />
      <h2 data-testid="recipe-category">{ detalhesComidas.strCategory }</h2>
      <h1 data-testid={ `${0}-ingredient-name-and-measure` }>ingredientes</h1>
      <span data-testid="instructions">{ detalhesComidas.strInstructions }</span>
      <iframe
        data-testid="video"
        src={ detalhesComidas.strYoutube }
        title="YouTube"
        allowFullScreen
      />
      <span data-testid={ `${0}-recomendation-card` } />
      <button type="button" data-testid="start-recipe-btn">iniciar Receita</button>

    </>
  );
}

export default CartaoDetalhesComidas;
