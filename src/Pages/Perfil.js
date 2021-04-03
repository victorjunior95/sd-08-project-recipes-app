import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

import '../styles/Perfil.css';

function Perfil() {
  const getEmail = () => {
    if (localStorage.getItem('user') !== null) {
      const { email } = JSON.parse(localStorage.getItem('user'));
      return email;
    }
  };

  const clearLocalStorage = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('mealsToken');
    localStorage.removeItem('cocktailsToken');
    localStorage.removeItem('doneRecipes');
    localStorage.removeItem('favoriteRecipes');
    localStorage.removeItem('inProgressRecipes');
  };

  return (
    <div className="comidas-body perfil">
      <Header title="Perfil" search={ false } />
      <h3 className="email" data-testid="profile-email">{getEmail()}</h3>
      <div className="btn-container">
        <Link to="/receitas-feitas">
          <div className="btn-perfil" data-testid="profile-done-btn">
            Receitas Feitas
          </div>
        </Link>
        <Link to="/receitas-favoritas">
          <div className="btn-perfil" data-testid="profile-favorite-btn">
            Receitas Favoritas
          </div>
        </Link>
        <Link to="/">
          <button
            className="btn-perfil"
            type="button"
            data-testid="profile-logout-btn"
            onClick={ clearLocalStorage }
          >
            Sair
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Perfil;
