import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

export default function Header({ pageTitle, showSearchButton = true }) {
  const [showSearchInput, setShowSearchInput] = useState(false);

  return (
    <header>
      <Link to="/perfil">
        <img src={ profileIcon } alt="Profile Icon" data-testid="profile-top-btn" />
      </Link>
      <h1 data-testid="page-title">{pageTitle}</h1>
      {showSearchButton && (
        <button type="button" onClick={ () => setShowSearchInput(!showSearchInput) }>
          <img src={ searchIcon } alt="Search Icon" data-testid="search-top-btn" />
        </button>
      )}
      {showSearchInput && <input type="text" data-testid="search-input" />}
    </header>
  );
}

Header.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  showSearchButton: PropTypes.string.isRequired,
};
