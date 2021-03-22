import React, { Component } from 'react';

import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import '../styles/components/Header.css';

class Header extends Component {
  getByTitle() {
    const { history: { location: { pathname } } } = this.props;
    if (pathname === '/comidas') return ['Comidas', true];
    if (pathname === '/bebidas') return ['Bebidas', true];
    if (pathname === '/explorar') return ['Explorar', false];
    if (pathname === '/explorar/comidas') return ['Explorar Comidas', false];
    if (pathname === '/explorar/bebidas') return ['Explorar Bebidas', false];
    if (pathname === '/explorar/comidas/ingredientes'
    || pathname === '/explorar/bebidas/ingredientes'
    ) return ['Explorar Ingredientes', false];
    if (pathname === '/explorar/comidas/area') return ['Explorar Origens', true];
    if (pathname === '/perfil') return ['Perfil', false];
    if (pathname === '/receitas-feitas') return ['Receitas feitas', false];
    if (pathname === '/receitas-favoritas') return ['Receitas favoritas', false];
  }

  render() {
    /* console.log(this.props.history.location.pathname); */
    return (
      <header className="headerContainer">
        <button
          type="button"
          src={ profileIcon }
          data-testid="profile-top-btn"
        >
          <img
            src={ profileIcon }
            alt="profile"
          />
        </button>
        <h1 data-testid="page-title">{this.getByTitle()[0]}</h1>
        {this.getByTitle()[1] && (
          <button
            type="button"
            src={ searchIcon }
            data-testid="search-top-btn"
          >
            <img
              src={ searchIcon }
              alt="search"
            />
          </button>)}

      </header>
    );
  }
}

/* Header.propTypes = {
  pathname: PropTypes.string.isRequired,
}; */

export default Header;
