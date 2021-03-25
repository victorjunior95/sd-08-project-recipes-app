import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { getIngredientes, checkIngrediente } from '../services/services';
import {
  getReceitaBebidasDetalhesPorId,
  getReceitaComidasDetalhesPorId,
} from '../services/BuscaNasAPIs';

// Página de ingredientes de comida para teste (retirado do avaliador): http://localhost:3000/comidas/52771/in-progress
// Página de ingredientes de bebida para teste (retirado do avaliador): http://localhost:3000/bebidas/178319/in-progress

function RecipeInProgress() {
  const [detalhesDoIngrediente, setDetalhesDoIngrediente] = useState({});

  // https://scrimba.com/scrim/cyp4KdH3
  const matchObject = useRouteMatch();
  const receitaItemId = matchObject.params.id;
  const tipoReceita = matchObject.path === '/comidas/:id/in-progress'
    ? 'meals'
    : 'cocktails';

  useEffect(() => {
    const getReceitaDetalhes = async () => {
      const arrayReceitaDetalhes = tipoReceita === 'cocktails'
        ? await getReceitaBebidasDetalhesPorId(receitaItemId)
        : await getReceitaComidasDetalhesPorId(receitaItemId);
      if (arrayReceitaDetalhes) setDetalhesDoIngrediente(arrayReceitaDetalhes[0]);
    };

    getReceitaDetalhes();
  }, [receitaItemId, tipoReceita]);

  const loadListaDeIngredientes = () => (
    <ul>
      {getIngredientes(detalhesDoIngrediente).map((item, index) => (
        <li
          key={ index }
          data-testid={ `${index}-ingredient-step` }
        >
          <label htmlFor={ `${item.ingredient}` }>
            <input
              type="checkbox"
              // CONTINUAR DAQUI
              checked
              value={ `${item.ingredient}` }
              onChange={ (e) => {
                checkIngrediente(e.target.value, tipoReceita, receitaItemId);
              } }
            />
            <img
              width="30px"
              src={ `https://www.themealdb.com/images/ingredients/${item.ingredient}.png` }
              alt="ingredient"
            />
            {' '}
            {item.measure}
            {' '}
            -
            {' '}
            {item.ingredient}
          </label>
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      <img
        alt=""
        width="100%"
        data-testid="recipe-photo"
        src=""
      />

      <h3 data-testid="recipe-title">Receita em progresso</h3>

      <button
        type="button"
        data-testid="share-btn"
      >
        Compartilhar
      </button>

      <button
        type="button"
        data-testid="favorite-btn"
      >
        Favoritar
      </button>

      <h4 width="90%" data-testid="recipe-category">
        Categoria da Receita
      </h4>

      { loadListaDeIngredientes() }

      <p width="90%" data-testid="instructions">Instruções</p>

      <button
        type="button"
        width="100%"
        data-testid="finish-recipe-btn"
      >
        Finalizar
      </button>
    </div>
  );
}

export default RecipeInProgress;
