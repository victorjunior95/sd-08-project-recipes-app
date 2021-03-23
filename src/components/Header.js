import React from 'react';

import ProfileIcon from '../images/profileIcon.svg';
import SearchIcon from '../images/searchIcon.svg';

export default function Header() {
  return (
    <header>
      <button type="button">
        <img src={ SearchIcon } alt="search-icon" data-testid="search-top-btn" />
      </button>
      <h1 data-testid="page-title">Comidas</h1>
      <button type="button">
        <img src={ ProfileIcon } alt="profile-icon" data-testid="profile-top-btn" />
      </button>
    </header>
  );
}
