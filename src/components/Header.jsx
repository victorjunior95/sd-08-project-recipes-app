import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import ProfileButton from './buttons/ProfileButton';
import SearchButton from './buttons/SearchButton';

function Header(props) {
  const { pathname } = useLocation();
  const { title } = props;
  return (
    <header className="header-container">
      <ProfileButton />
      <h2 data-testid="page-title">
        {
          title
        }
      </h2>
      {
        pathname === '/comidas'
        || pathname === '/bebidas'
        || pathname === '/explorar/comidas/area'
          ? <SearchButton /> : null
      }
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
