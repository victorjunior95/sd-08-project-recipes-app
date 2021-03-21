import React from 'react';
import { useLocation } from 'react-router-dom';
import ProfileButton from './buttons/ProfileButton';
import SearchButton from './buttons/SearchButton';

function Header() {
  const { pathname } = useLocation();

  return (
    <header className="header-container">
      <ProfileButton />
      <h2 data-testid="page-title">{}</h2>
      {
        pathname === '/comidas' ? <SearchButton /> : null
      }
    </header>
  );
}

export default Header;
