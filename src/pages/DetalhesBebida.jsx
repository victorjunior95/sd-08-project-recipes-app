import React from 'react';
import { useParams } from 'react-router-dom';

function DetalhesBebida() {
  const { id } = useParams();

  return (
    <div>
      { id }
      <footer>footer</footer>
    </div>
  );
}

export default DetalhesBebida;
