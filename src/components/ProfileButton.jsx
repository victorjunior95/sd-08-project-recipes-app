import React from 'react';
import { useHistory } from 'react-router-dom';

import profileIcon from '../images/profileIcon.svg';

function ProfileButton() {
  const history = useHistory();
  return (
    <button
      type="button"
      data-testid="profile-top-btn"
      onClick={ () => history.push('/perfil') }
    >
      <img src={ profileIcon } alt="Imagem do Perfil" />
    </button>
  );
}

export default ProfileButton;
