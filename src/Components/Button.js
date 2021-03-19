import React from 'react';
import propTypes from 'prop-types';

function Button({ children, onClick, dataid }) {
  return (
    <button type="button" onClick={ onClick } data-testid={ dataid }>
      { children }
    </button>
  );
}

Button.propTypes = {
  children: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
  dataid: propTypes.string.isRequired,
};

export default Button;
