import React from 'react';
import { Link } from 'react-router-dom';

function index() {
  const logout = () => {
    localStorage.clear();
  };

  const userEmail = JSON.parse(localStorage.user).email;

  return (
    <div>
      <h1>Perfil</h1>
      <p data-testid="profile-email">{ userEmail }</p>
      <button
        data-testid="profile-done-btn"
        type="button"
      >
        <Link to="/receitas-feitas">
          Receitas Feitas
        </Link>
      </button>
      <button
        data-testid="profile-favorite-btn"
        type="button"
      >
        <Link to="/receitas-favoritas">
          Receitas Favoritas
        </Link>
      </button>
      <button
        data-testid="profile-logout-btn"
        type="button"
        onClick={ logout }
      >
        <Link to="/">
          Sair
        </Link>
      </button>
    </div>
  );
}

export default index;
