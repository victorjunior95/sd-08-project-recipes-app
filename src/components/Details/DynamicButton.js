import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function DynamicButton() {
  const { id } = useParams();
  return (
    <Link to={ `/comidas/${id}/in-progress` }>
      <button
        type="button"
        data-testid="start-recipe-btn"
        className="start-recipe"
      >
        INICIAR RECEITA
      </button>
    </Link>
  );
}
