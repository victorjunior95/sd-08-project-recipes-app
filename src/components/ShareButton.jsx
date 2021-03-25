import React, { useState } from 'react';
import { useLocation } from 'react-router';
import share from '../images/shareIcon.svg';

const copy = require('clipboard-copy');

export default function ShareButton() {
  const { pathname } = useLocation();
  const [message, setMessage] = useState('');

  function handleClick() {
    copy(`http://localhost:3000${pathname}`)
      .then(() => setMessage('Link copiado!'))
      .catch(() => setMessage('Não copiou!'));
  }

  if (message) { return (<span>{ message }</span>); }

  return (
    <button
      type="button"
      onClick={ handleClick }
    >
      <img
        alt="share-icon"
        src={ share }
        data-testid="share-btn"
      />
    </button>
  );
}
