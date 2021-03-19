import React from 'react';
import propTypes from 'prop-types';

function Button({ children, onClick, dataid, disabled }) {
  return (
    <button
      type="button"
      onClick={ onClick }
      data-testid={ dataid }
      disabled={ disabled }
    >
      { children }
    </button>
  );
}

Button.propTypes = {
  children: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
  dataid: propTypes.string.isRequired,
  disabled: propTypes.bool.isRequired,
};

export default Button;
