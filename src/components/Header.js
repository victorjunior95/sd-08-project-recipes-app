import React from 'react';
import PropTypes from 'prop-types';

import ProfileIcon from '../images/profileIcon.svg';
import SearchIcon from '../images/searchIcon.svg';

export default function Header({ title, search }) {
  return (
    <header>
      <button type="button">
        <img data-testid="profile-top-btn" src={ ProfileIcon } alt="profile-icon" />
      </button>
      <h1 data-testid="page-title">{ title }</h1>
      {
        search === 'false' ? ''
          : (
            <button type="button">
              <img src={ SearchIcon } alt="search-icon" data-testid="search-top-btn" />
            </button>
          )
      }
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
};
