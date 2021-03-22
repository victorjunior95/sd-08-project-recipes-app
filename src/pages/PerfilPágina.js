import React from 'react';
import profileIcon from '../images/profileIcon.svg';

const ProfilePage = () => (
  <div>
    <p data-testid="page-title"> Perfil</p>
    <button type="button">
      <img src={ profileIcon } alt="profileIcon" />
    </button>
  </div>
);
export default ProfilePage;
