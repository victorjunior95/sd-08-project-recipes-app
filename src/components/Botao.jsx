import React from 'react';

function Botao({ testid, tipo, src }) {
  return (

    <button
      type="button"
      data-testid={ testid }
    >
      <img
        alt={ `Ícone do Botão de ${tipo}` }
        src={ src }
      />
    </button>

  );
}

export default Botao;
