import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import RecipeSearchBar from './RecipeSearchBar';

// Fazer com que o H1 seja dinâmico de acordo com o endpoint

export default function Header() {
  const history = useHistory();
  const title = history.location.pathname;
  const aTitle = title.split('/');
  if (aTitle[3] === 'area') aTitle.splice(aTitle.length - 1, 1, 'origem');
  const [search, setSearchBar] = useState(false);
  const handleClick = () => {
    if (!search) {
      setSearchBar(true);
    } else if (search) {
      setSearchBar(false);
    }
  };

  if (!title.includes('explorar')) {
    return (
      <header>
        <Link to="/perfil">
          <img
            alt="profile-icon"
            src={ profileIcon }
            data-testid="profile-top-btn"
          />
        </Link>
        <h1
          data-testid="page-title"
        >
          { title.charAt(1).toUpperCase() + title.slice(2) }
        </h1>
        <button type="button" onClick={ handleClick }>
          <img
            data-testid="search-top-btn"
            src={ searchIcon }
            alt="search-icon"
          />
        </button>
        { search ? <RecipeSearchBar /> : ''}

      </header>
    );
  }
  if (aTitle[3] === 'origem') {
    return (
      <header>
        <Link to="/perfil">
          <img
            alt="profile-icon"
            src={ profileIcon }
            data-testid="profile-top-btn"
          />
        </Link>
        <h1 data-testid="page-title">
          { aTitle.length <= 2 ? title.charAt(1).toUpperCase() + title.slice(2)
            : `${aTitle[1].charAt(0).toUpperCase() + aTitle[1].slice(1)} ${
              aTitle[aTitle.length - 1].charAt(0).
                toUpperCase()}${aTitle[aTitle.length - 1].slice(1)}` }
        </h1>
        <button type="button" onClick={ handleClick }>
          <img
            data-testid="search-top-btn"
            src={ searchIcon }
            alt="search-icon"
          />
        </button>
        { search ? <RecipeSearchBar /> : ''}

      </header>
    );
  }
  return (
    <header>
      <Link to="/perfil">
        <img
          alt="profile-icon"
          src={ profileIcon }
          data-testid="profile-top-btn"
        />
      </Link>
      <h1
        data-testid="page-title"
      >
        { aTitle.length <= 2 ? title.charAt(1).toUpperCase() + title.slice(2)
          : `${aTitle[1].charAt(0).toUpperCase() + aTitle[1].slice(1)} ${
            aTitle[aTitle.length - 1].charAt(0).toUpperCase()}${aTitle[aTitle.length - 1]
            .slice(1)}` }
      </h1>
    </header>
  );
}
