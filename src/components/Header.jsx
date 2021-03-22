import React from 'react';
import PropTypes from 'prop-types';
import ProfileButton from './ProfileButton';
import PageTitle from './PageTitle';
import '../styles/header.css';

function Header({ label, Search }) {
  return (
    <header className="header">
      <ProfileButton />
      <PageTitle text={ label } />
      <Search />
    </header>
  );
}

Header.propTypes = {
  label: PropTypes.string.isRequired,
  Search: PropTypes.func.isRequired,
};

export default Header;
