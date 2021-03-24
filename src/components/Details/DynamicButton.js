import React from 'react';

export default function DynamicButton() {
  return (
    <div>
      <button
        type="button"
        data-testid="start-recipe-btn"
        className="start-recipe"
      >
        INICIAR RECEITA
      </button>
    </div>
  );
}
