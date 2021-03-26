import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

function LinkButton({ path, attribute, name }) {
  return (
    <Link to={ path }>
      <button data-testid={ attribute } type="button">{ name }</button>
    </Link>
  );
}

LinkButton.propTypes = {
  path: PropTypes.string.isRequired,
  attribute: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default LinkButton;
