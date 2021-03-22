import React from 'react';
import { NavLink } from 'react-router-dom';
import HeaderP from '../components/HeaderP';

import '../styles/Perfil.css';

function Perfil() {
  const clearLocalStorage = () => {
    if (localStorage.length > 0) {
      localStorage.clear();
    }
  };

  const userEmail = JSON.parse(localStorage.user).email;

  return (
    <div>
      <HeaderP title="Perfil" />
      <div className="container-perfil">
        <div><h4 data-testid="profile-email">{ userEmail }</h4></div>
        <div className="div-btn-perfil">
          <NavLink to="/receitas-feitas">
            <button
              type="button"
              data-testid="profile-done-btn"
              className="btn-profile"
            >
              Receitas Feitas
            </button>
          </NavLink>
        </div>
        <div className="div-btn-perfil">
          <NavLink to="/receitas-favoritas">
            <button
              type="button"
              data-testid="profile-favorite-btn"
              className="btn-profile"
            >
              Receitas Favoritas
            </button>
          </NavLink>
        </div>
        <div className="div-btn-perfil">
          <NavLink to="/">
            <button
              type="button"
              data-testid="profile-logout-btn"
              className="btn-profile"
              onClick={ clearLocalStorage }
            >
              Sair
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
