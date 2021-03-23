import React, { useState } from 'react';

import ProfileIcon from '../../images/profileIcon.svg';
import SearchIcon from '../../images/searchIcon.svg';


function Header({ history }) {
  const [search, setSearch] = useState(false);
  const { location: { pathname } } = history;
  console.log(pathname);

  let title = '';
  switch (pathname) {
  case '/perfil':
    title = 'Perfil';
    break;
  case '/bebidas':
    title = 'Bebidas';
    break;
  case '/comidas':
    title = 'Comidas';
    break;
  case '/explorar/bebidas':
    title = 'Explorar Bebidas';
    break;
  case '/explorar/comidas':
    title = 'Explorar Comidas';
    break;
  case '/explorar':
    title = 'Explorar';
    break;
  case '/explorar/comidas/ingredientes':
  case '/explorar/bebidas/ingredientes':
    title = 'Explorar Ingredientes';
    break;
  case '/explorar/comidas/area':
    title = 'Explorar Origem';
    break;
  case '/receitas-feitas':
    title = 'Receitas Feitas';
    break;
  case '/receitas-favoritas':
    title = 'Receitas Favoritas';
    break;
  default:
    break;
  }

  return (
    <header>
      <nav>
        <a href="/perfil">
          <img
            data-testid="profile-top-btn"
            src={ ProfileIcon }
            alt="profile link to page"
          />
        </a>
        <h1 data-testid="page-title">{title}</h1>
        <img
          data-testid="search-top-btn"
          src={ SearchIcon }
          alt="search icon"
          onClick={ () => setSearch((previousState) => !(previousState))}
        >
        </img>
      </nav>
    </header>
  );  
}

export default Header;
