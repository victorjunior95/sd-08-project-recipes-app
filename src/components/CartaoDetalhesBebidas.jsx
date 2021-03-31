import React, { useContext } from 'react';
import ContextReceitas from '../context/ContextReceitas';
import Botao from './Botao';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import Imagem from './Imagem';

function CartaoDetalhesBebidas() {
  const { detalhesBebidas } = useContext(ContextReceitas);
  console.log(detalhesBebidas);
  function objectToArray(detalhes) {
    const ingredientes = Object.entries(detalhes).filter((e) => e[0].includes('strIngredient') && e[1] !== null);
    const medidas = Object.entries(detalhes).filter((e) => e[0].includes('strMeasure'));
    return ingredientes.map((e, i) => (
      <p key={ e[0] } data-testid={ `${i}-ingredient-name-and-measure` }>{`${e[1]}:${medidas[i][1] === null ? 'A gosto' : medidas[i][1]}`}</p>
    ));
  }

  return (
    <>
      <Imagem
        testid="recipe-photo"
        alt={ detalhesBebidas.strDrink }
        src={ detalhesBebidas.strDrinkThumb }
      />
      <h1 data-testid="recipe-title">{ detalhesBebidas.strDrink }</h1>
      <Botao testid="share-btn" tipo="Compartilhar" src={ shareIcon } />
      <Botao testid="favorite-btn" tipo="Favoritar" src={ blackHeartIcon } />
      <h2 data-testid="recipe-category">{ detalhesBebidas.strCategory }</h2>
      { objectToArray(detalhesBebidas) }
      <span data-testid="instructions">{ detalhesBebidas.strInstructions }</span>
      <span data-testid={ `${0}-recomendation-card` } />
      <button type="button" data-testid="start-recipe-btn">iniciar Receita</button>

    </>
  );
}

export default CartaoDetalhesBebidas;
