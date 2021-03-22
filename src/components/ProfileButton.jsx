import React from 'react';
import { useHistory } from 'react-router-dom';

import profileIcon from '../images/profileIcon.svg';

function ProfileButton() {
  const history = useHistory();
  const handleClick = () => {
    history.push('/perfil');
  };

  return (
    <input
      type="image"
      src={ profileIcon }
      alt="Imagem do Perfil"
      data-testid="profile-top-btn"
      onClick={ handleClick }
    />
  );
}

export default ProfileButton;
