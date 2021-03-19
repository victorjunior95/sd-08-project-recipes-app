import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import profile from '../images/profileIcon.svg';
import search from '../images/searchIcon.svg';

const Header = (props) => {
  const { title } = props;
  const [showSearchBar, setShow] = useState(false);

  function renderSearchBar() {
    return (
      <section>
        <input type="text" data-testid="search-input" />
      </section>
    );
  }

  function handleClick() {
    switch (showSearchBar) {
    case true:
      setShow(false);
      break;
    case false:
      setShow(true);
      break;
    default:
      break;
    }
  }

  return (
    <header>
      <section className="header-bar">
        <Link to="/perfil">
          <input type="image" src={ profile } alt="prof" data-testid="profile-top-btn" />
        </Link>
        <h3 data-testid="page-title">{ title }</h3>
        <input
          type="image"
          src={ search }
          alt="search"
          onClick={ handleClick }
          data-testid="search-top-btn"
        />
      </section>
      { showSearchBar && renderSearchBar() }
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
