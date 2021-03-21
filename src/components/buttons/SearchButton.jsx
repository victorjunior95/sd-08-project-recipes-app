import React from 'react';
import searchIcon from '../../images/searchIcon.svg';

function SearchButton() {
  return (
    <button
      src="searchIcon"
      className="main-buttons"
      data-testid="search-top-btn"
      type="button"
    >
      <img src={ searchIcon } alt="search button" />
    </button>
  );
}

export default SearchButton;
