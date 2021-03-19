import React from 'react';

const Input = ({ label, onChange, name, value, type, datatestid }) => (
  <label htmlFor={ name }>
    { label }
    <input
      type={ type }
      name={ name }
      value={ value }
      onChange={ onChange }
      data-testid={ datatestid }
    />
  </label>
);

export default Input;
