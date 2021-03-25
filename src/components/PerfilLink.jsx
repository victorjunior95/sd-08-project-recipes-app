import React from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';

function PerfilLink() {
  return (
    <Link to="/perfil">
      <img
        alt="profile-icon"
        src={ profileIcon }
        data-testid="profile-top-btn"
      />
    </Link>
  );
}

export default PerfilLink;
