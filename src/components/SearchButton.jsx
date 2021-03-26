import React from 'react';
import PropTypes from 'prop-types';

import { searchIcon } from '../common/svgStore';

function SearchButton({ callback }) {
  return (
    <input
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
