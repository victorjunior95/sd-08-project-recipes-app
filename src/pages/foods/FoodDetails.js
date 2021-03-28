import React from 'react';
import { Link } from 'react-router-dom';

export default function FoodDetails({ match: { params } }) {
  const { id } = params;

  return (
    <div>
      FoddDetails
      <Link to={ `/comidas/${id}/in-progress` }>
        Iniciar Receita
      </Link>
    </div>
  );
}
