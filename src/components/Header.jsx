import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ title }) {
  return (
    <div>
      <Link to="/perfil">
        <img src={ profileIcon } alt="Profile" data-testid="profile-top-btn" />
      </Link>
      <h3 data-testid="page-title">{ title }</h3>
      <Link to="/pesquisa">
        <img src={ searchIcon } alt="Search" data-testid="search-top-btn" />
      </Link>

    </div>
  );
}

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
