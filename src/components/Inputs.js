import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ label, onChange, name, type, datatestid, value }) => (
  <label htmlFor={ name }>
    { label }
    <input
      type={ type }
      name={ name }
      onChange={ onChange }
      data-testid={ datatestid }
      value={ value }
    />
  </label>
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  datatestid: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
