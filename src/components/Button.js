import React from 'react';
import PropTypes from 'prop-types';

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

Button.propTypes = {
  label: PropTypes.string.isRequired,
  datatestid: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
