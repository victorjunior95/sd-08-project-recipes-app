import React from 'react';
import PropTypes from 'prop-types';

import { searchIcon } from '../common/svgStore';
import '../styles/searchButton.css';

function SearchButton({ callback }) {
  return (
    <input
      className="search-btn"
      type="image"
      src={ searchIcon }
      alt="Imagem da Busca"
      data-testid="search-top-btn"
      onClick={ callback }
    />
  );
}

SearchButton.propTypes = {
  callback: PropTypes.func.isRequired,
};

export default SearchButton;
