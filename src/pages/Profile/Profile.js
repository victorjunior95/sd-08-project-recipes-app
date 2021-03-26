import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function Profile() {
  const history = useHistory();

  function handleExit() {
    localStorage.clear();
    history.push('/');
  }
  const { email } = JSON.parse(localStorage.getItem('user'));
  return (
    <div>
      <Header name="Perfil" icon="true" currentPage="Profile" />
      <p>
        Usuário:
        <span data-testid="profile-email">{email}</span>
      </p>
      <Link to="/receitas-feitas">
        <button type="button" data-testid="profile-done-btn">
          Receitas Feitas
        </button>
      </Link>
      <Link to="/receitas-favoritas">
        <button type="button" data-testid="profile-favorite-btn">
          Receitas Favoritas
        </button>
      </Link>
      <button
        type="button"
        data-testid="profile-logout-btn"
        onClick={ handleExit }
      >
        Sair
      </button>
      <Footer />
    </div>
  );
}

export default Profile;

// O elemento de email deve possuir o atributo data-testid="profile-email";
// O botão com as "Receitas Feitas" deve possuir o atributo data-testid="profile-done-btn";
// O botão com as "Receitas Favoritas" deve possuir o atributo data-testid="profile-favorite-btn";
// O botão de sair deve possuir o atributo data-testid="profile-logout-btn".
