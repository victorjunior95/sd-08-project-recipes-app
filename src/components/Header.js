import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import profileIcon from '../assets/images/profileIcon.svg';
import searchIcon from '../assets/images/searchIcon.svg';
import RecipesContext from '../context/RecipesContext';

export default function Header({ title }) {
  const { setShow } = useContext(RecipesContext);

  function filter() {
    setShow();
  }

  function headerBtn() {
    const titlesList = ['Comidas', 'Bebidas', 'Explorar Origem'];
    switch (titlesList.includes(title)) {
    case true:
      return (
        <button type="button" onClick={ filter }>
          <img data-testid="search-top-btn" src={ searchIcon } alt="search" />
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

Header.propTypes = ({ title: PropTypes.string.isRequired });
