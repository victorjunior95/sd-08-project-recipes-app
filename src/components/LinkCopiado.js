import React, { useContext } from 'react';
import RecipeContext from '../context/RecipeContext';

function LinkCopiado() {
  const { copied } = useContext(RecipeContext);
  return (
    copied && <span className="copied-link">Link copiado!</span>
  );
}

export default LinkCopiado;
