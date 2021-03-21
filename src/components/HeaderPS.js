import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';

const HeaderPS = ({ title }) => {
  const [data, setData] = useState('');
  const [open, setOpen] = useState('collapse');

  return (
    <div className="navbar">
      <Link to="/perfil">
        <img
          data-testid="profile-top-btn"
          src={ profileIcon }
          alt="profile"
        />
      </Link>
      <h1 data-testid="page-title">{ title }</h1>
      <a
        data-toggle="collapse"
        href="#collapseInput"
        role="button"
        aria-expanded="false"
        aria-controls="collapseInput"
        onClick={ () => {
          setData(data === '' ? 'search-input' : '');
          setOpen(open === 'collapse' ? 'collapse.show' : 'collapse');
        } }
      >
        <img
          data-testid="search-top-btn"
          src={ searchIcon }
          alt="search"
        />
      </a>
      <input
        type="text"
        data-testid={ data }
        className={ open }
        placeholder="Buscar Receita"
      />
    </div>
  );
};

HeaderPS.propTypes = {
  title: PropTypes.string.isRequired,
};

export default HeaderPS;
