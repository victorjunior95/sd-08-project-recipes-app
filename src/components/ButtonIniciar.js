import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import RecipeContext from '../context/RecipeContext';

function ButtonIniciar({ onClick, id }) {
  const { startedRecipes } = useContext(RecipeContext);
  return (
    <button
      className="start-recipe-btn"
      type="button"
      data-testid="start-recipe-btn"
      onClick={ onClick }
    >
      {startedRecipes.some((elem) => elem === id)
        ? 'Continuar Receita' : 'Iniciar Receita' }
    </button>
  );
}

ButtonIniciar.propTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default ButtonIniciar;
