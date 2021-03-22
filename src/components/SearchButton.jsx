import React from 'react';

import searchIcon from '../images/searchIcon.svg';

function SearchButton() {
  return (
    <input
      type="image"
      src={ searchIcon }
      alt="Imagem da Busca"
      data-testid="search-top-btn"
      onClick={ () => '' }
    />
  );
}

export default SearchButton;
