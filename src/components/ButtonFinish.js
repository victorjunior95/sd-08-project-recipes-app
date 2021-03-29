import React, { useContext } from 'react';
import RecipeContext from '../context/RecipeContext';
import '../styles/ButtonFinish.css';

function ButtonFinish() {
  const { verifyCheckbox } = useContext(RecipeContext);
  return (
    <button
      className="button-finish"
      type="button"
      data-testid="finish-recipe-btn"
      disabled={ !verifyCheckbox.every((e) => e === true) }
    >
      Finalizar Receita
    </button>
  );
}

export default ButtonFinish;
