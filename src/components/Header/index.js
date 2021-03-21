import React from 'react';
import { Navbar } from 'react-bootstrap';
import PropTypes from 'prop-types';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';

export default function Header(props) {
  const { title } = props;
  return (
    <Navbar className="justify-content-around align-items-center bg-warning">
      <Navbar.Brand href="/perfil">
        <img
          src={ profileIcon }
          alt="Link para o perfil"
          data-testid="profile-top-btn"
        />
      </Navbar.Brand>
      <h1 className="m-0 h5" data-testid="page-title">{title}</h1>
      <Navbar.Brand>
        <img
          src={ searchIcon }
          alt="Link para a barra de pesquisa"
          data-testid="search-top-btn"
        />
      </Navbar.Brand>
    </Navbar>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
