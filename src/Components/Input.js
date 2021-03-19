import React from 'react';
import propTypes from 'prop-types';

function Input({ name, value, onChange, dataid }) {
  return (
    <label htmlFor={ name }>
      { name }
      <input name={ name } value={ value } onChange={ onChange } data-testid={ dataid } />
    </label>
  );
}

Input.propTypes = {
  name: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  dataid: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};

export default Input;
