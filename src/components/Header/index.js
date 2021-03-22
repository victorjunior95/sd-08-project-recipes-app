import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import PropTypes from 'prop-types';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';
import './style.css';
import SeekBar from '../SeekBar';

export default function Header(props) {
  const [showSeachbar, setShowSeachbar] = useState(false);
  const { title } = props;

  function controlSearchbar(e) {
    const { target: { checked } } = e;
    setShowSeachbar(checked);
  }
  function renderSearchBarIcon() {
    if (title !== 'Perfil') {
      return (
        <label htmlFor="searchBarControl" className="navbar-brand searchIcon">
          <img
            src={ searchIcon }
            alt="Link para a barra de pesquisa"
            data-testid="search-top-btn"
          />
          <input
            type="checkbox"
            className="searchBarControl"
            id="searchBarControl"
            onClick={ controlSearchbar }
          />
        </label>
      );
    }
    return <span>{' '}</span>;
  }
  return (
    <>
      <Navbar className="justify-content-around align-items-center bg-warning header">
        <Navbar.Brand href="/perfil">
          <img
            src={ profileIcon }
            alt="Link para o perfil"
            data-testid="profile-top-btn"
          />
        </Navbar.Brand>
        <h1 className="m-0 h5" data-testid="page-title">{title}</h1>
        { renderSearchBarIcon() }
      </Navbar>
      { showSeachbar && <SeekBar
        type="text"
        placeholder="Pesquisar"
        className="mt-3"
        data-testid="search-input"
      />}
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
