import React from 'react';

import searchIcon from '../images/searchIcon.svg';

function ProfileButton() {
  return (
    <button type="button" data-testid="search-top-btn">
      <img src={ searchIcon } alt="Imagem da Busca" />
    </button>
  );
}

export default ProfileButton;
