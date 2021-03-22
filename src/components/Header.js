import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import profileIcon from '../assets/images/profileIcon.svg';
import searchIcon from '../assets/images/searchIcon.svg';
import RecipesContext from '../context/RecipesContext';

export default function Header() {
  const { title } = useContext(RecipesContext);

  function filter() {
    console.log('ok');
  }

  function headerBtn() {
    const titlesList = ['comidas', 'bebidas', 'explorar origem'];
    switch (titlesList.includes(title)) {
    case true:
      return (
        <button type="button" data-testid="search-top-btn" onClick={ filter }>
          <img src={ searchIcon } alt="search" />
        </button>);
    default:
      return ('');
    }
  }

  return (
    <header>
      <div>
        <Link to="/perfil">
          <img src={ profileIcon } alt="profile" data-testid="profile-top-btn" />
        </Link>
      </div>
      <div data-testid="page-title" className="text-capitalize">{title}</div>
      {headerBtn()}
    </header>
  );
}
