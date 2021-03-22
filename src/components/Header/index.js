import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';
import exploreIcon from '../../images/exploreIcon.svg';

function Header({ children, explore }) {
  const [search, setSearch] = useState(false);

  const searchBar = () => {
    setSearch(!search);
  };

  const searchButton = () => (
    <button type="button" onClick={ searchBar }>
      <img
        src={ searchIcon }
        alt="Ícone de Pesquisa"
        data-testid="search-top-btn"
      />
    </button>
  );

  return (
    <header>
      <h2 data-testid="page-title">{children}</h2>
      <Link to="/perfil">
        <img
          src={ profileIcon }
          alt="Ícone de Perfil"
          data-testid="profile-top-btn"
        />
      </Link>
      {
        (explore === 'false') ? <img
          src={ exploreIcon }
          alt="Ícone de Explorar"
          data-testid="explore-top-btn"
        /> : searchButton()
      }
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
  explore: PropTypes.element.isRequired,
};

export default Header;
