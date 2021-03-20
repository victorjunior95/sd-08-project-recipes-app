import React from 'react';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

const Header = () => (
  <div className="header-container">
    <button className="main-buttons" data-testid="profile-top-btn" type="button">
      <img src={ profileIcon } alt="profile button" />
    </button>
    <h2 data-testid="page-title">Comidas</h2>
    <button className="main-buttons" data-testid="search-top-btn" type="button">
      <img src={ searchIcon } alt="search button" />
    </button>
  </div>
);

export default Header;
