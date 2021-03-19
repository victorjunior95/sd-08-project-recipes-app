import React from 'react';

const Button = ({ label, onClick, datatestid }) => (
  <button type="button" onClick={ onClick } data-testid={ datatestid }>
    { label }
  </button>
);

export default Button;
