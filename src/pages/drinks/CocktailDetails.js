import React from 'react';
import { Link } from 'react-router-dom';

export default function CocktailDetails({ match: { params } }) {
  const { id } = params;
  return (
    <div>
      Cocktail details
      <Link to={ `/bebidas/${id}/in-progress` }>
        Iniciar Receita
      </Link>
    </div>
  );
}
