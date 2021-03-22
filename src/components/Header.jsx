import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import RecipeSearchBar from './RecipeSearchBar';

// Fazer com que o H1 seja dinâmico de acordo com o endpoint

export default function Header({ title }) {
  const [search, setSearchBar] = useState(false);
  const handleClick = () => {
    if (!search) {
      setSearchBar(true);
    } else if (search) {
      setSearchBar(false);
    }
  };

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
      <button
        type="button"
        data-testid="search-top-btn"
        onClick={ handleClick }
      >
        <img
          src={ searchIcon }
          alt="search-icon"
        />
      </button>
      { search ? <RecipeSearchBar /> : ''}

    </header>
    // - Tem os data-testids `profile-top-btn`, `page-title` e `search-top-btn`
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
