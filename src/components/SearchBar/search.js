import React from 'react';

const SearchBar = () => (
  <>
    <input type="text" data-testid="search-input" />
    <input type="radio" data-testid="ingredient-search-radio" />
    <input type="radio" data-testid="name-search-radio" />
    <input type="radio" data-testid="first-letter-search-radio" />
    <input type="radio" data-testid="exec-search-btn" />
  </>
);
export default SearchBar;
