import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router';
import share from '../images/shareIcon.svg';

const copy = require('clipboard-copy');

export default function ShareButton({ dataTestId }) {
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
        data-testid={ dataTestId }
      />
    </button>
  );
}

ShareButton.propTypes = {
  dataTestId: PropTypes.string,
};

ShareButton.defaultProps = {
  dataTestId: 'share-btn',
};
