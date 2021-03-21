import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import profile from '../images/profileIcon.svg';
import search from '../images/searchIcon.svg';
import Input from './Inputs';
import Button from './Button';

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
        <Input
          type="radio"
          datatestid="ingredient-search-radio"
          value="Ingredients"
          name="food"
          label="Ingredients"
        />
        <Input
          type="radio"
          datatestid="name-search-radio"
          value="busca por nome"
          label="busca por nome"
          name="food"
        />
        <Input
          type="radio"
          datatestid="first-letter-search-radio"
          value="busca da primeira letra"
          label="busca da primeira letra"
          name="food"
        />
        <Button
          datatestid="exec-search-btn"
          type="button"
          label="Buscar"
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
