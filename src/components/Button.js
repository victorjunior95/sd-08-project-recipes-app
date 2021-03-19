import React from 'react';

const Button = ({ label, onClick, datatestid, disabled }) => (
  <button
    type="button"
    onClick={ onClick }
    data-testid={ datatestid }
    disabled={ disabled }
  >
    { label }
  </button>
);

export default Button;
