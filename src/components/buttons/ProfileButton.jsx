import React from 'react';
import profileIcon from '../../images/profileIcon.svg';

function ProfileButton() {
  return (
    <button className="main-buttons" data-testid="profile-top-btn" type="button">
      <img src={ profileIcon } alt="profile button" />
    </button>
  );
}

export default ProfileButton;
