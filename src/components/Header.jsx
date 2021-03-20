import React from 'react';
import { useLocation } from 'react-router-dom';
import ProfileButton from './buttons/ProfileButton';
import SearchButton from './buttons/SearchButton';

function Header() {
  const { pathname } = useLocation();

  const changeTitleByPathName = () => {
    if (pathname.includes('/comidas')) {
      return 'comidas';
    }
    if (pathname.includes('/bebidas')) {
      return 'bebidas';
    }
    if (pathname.includes('/profile')) {
      return 'Perfil';
    }
    if (pathname.includes('/receitas-feitas')) {
      return 'Receitas Feitas';
    }
    if (pathname.includes('/receitas-favoritas')) {
      return 'Receitas Favoritas';
    }
    if (pathname.includes('/explorar/comidas')) {
      return 'explorar comidas';
    }
  };

  return (
    <header className="header-container">
      <ProfileButton />
      <h2 data-testid="page-title">{changeTitleByPathName()}</h2>
      {
        pathname === '/comidas' ? <SearchButton /> : null
      }
    </header>
  );
}

export default Header;
