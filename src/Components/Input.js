import React from 'react';
import propTypes from 'prop-types';

function Input({ type, name, value, onChange, dataid }) {
  return (
    <label htmlFor={ name }>
      { name }
      <input
        type={ type }
        name={ name }
        value={ value }
        onChange={ onChange }
        data-testid={ dataid }
      />
    </label>
  );
}

Input.propTypes = {
  type: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  dataid: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};

export default Input;
