import React from 'react';

function Imagem({ testid, src, alt }) {
  const CEM = 100;

  return (
    <img
      data-testid={ testid }
      alt={ alt }
      src={ src }
      width={ `${CEM}vh` }
    />

  );
}

export default Imagem;
