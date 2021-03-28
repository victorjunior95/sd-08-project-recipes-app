import React from 'react';
import { useLocation } from 'react-router-dom';

function Title() {
  const { pathname } = useLocation();

  switch (pathname) {
  case '/comidas': return <h1>Comidas</h1>;
  case '/bebidas': return <h1>Bebidas</h1>;
  case '/explorar': return <h1>Explorar</h1>;
  case '/explorar/comidas': return <h1>Explorar Comidas</h1>;
  case '/explorar/bebidas': return <h1>Explorar Bebidas</h1>;
  case '/explorar/comidas/ingredientes': return <h1>Explorar Ingredientes</h1>;
  case '/explorar/bebidas/ingredientes': return <h1>Explorar Ingredientes</h1>;
  case '/explorar/comidas/area': return <h1>Explorar Origem</h1>;
  case '/perfil': return <h1>Perfil</h1>;
  case '/receitas-feitas': return <h1>Receitas Feitas</h1>;
  case '/receitas-favoritas': return <h1>Receitas Favoritas</h1>;
  default: return false;
  }
}

export default Title;
