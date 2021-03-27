import React from 'react';
import PropTypes from 'prop-types';

function FilterButton({ filter }) {
  function firstToUpperCase(string) {
    const firstLetter = string.slice(0, 1).toUpperCase();
    const stringWithoutFirstLetter = string.slice(1);
    return firstLetter + stringWithoutFirstLetter;
  }

  const id = 'a';
  const dataTestid = `filter-by-${filter}-btn`;
  return (
    <button
      type="button"
      data-testid={ dataTestid }
      onClick={ () => console.log(filter) }
    >
    { firstToUpperCase(filter) }
    </button>
  );
}

FilterButton.propTypes = {
  filter: PropTypes.string.isRequired,
};

export default FilterButton;

