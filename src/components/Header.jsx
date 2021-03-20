import React from 'react';
import { useLocation } from 'react-router-dom';
import ProfileButton from './buttons/ProfileButton';
import SearchButton from './buttons/SearchButton';

function Header() {
  const { pathname } = useLocation();

  const changeTitleByPathName = () => {
    console.log(pathname);
    if (pathname.includes('/comidas')) {
      return 'Comidas';
    }
    if (pathname.includes('/bebidas')) {
      return 'Bebidas';
    }
    if (pathname.includes('/profile')) {
      return 'Perfil';
    }
    if (pathname.includes('/explorar')) {
      return 'Explorar';
    }
    if (pathname.includes('/receitas-feitas')) {
      return 'Receitas Feitas';
    }
    if (pathname.includes('/receitas-favoritas')) {
      return 'Receitas Favoritas';
    }
    if (pathname.includes('/explorar/comidas')) {
      return 'Explorar Comidas';
    }
    if (pathname.includes('/explorar/bebidas')) {
      return 'Explorar Bebidas';
    }
    if (pathname.includes('/explorar/bebidas/ingredientes')) {
      return 'Explorar Ingredientes';
    }
    if (pathname.includes('/explorar/comidas/ingredientes')) {
      return 'Explorar Ingredientes';
    }
    if (pathname.includes('/explorar/comidas/area')) {
      return 'Explorar Origem';
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
