import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';

function Profile() {
  const userEmail = JSON.parse(localStorage.getItem('user'));
  const history = useHistory();

  return (
    <>
      <div>
        <span data-testid="profile-email">{userEmail.email}</span>
      </div>
      <button
        type="button"
        onClick={ () => {
          history.push('receitas-feitas');
        } }
        to="/receitas-feitas"
        data-testid="profile-done-btn"
      >
        Receitas Feitas
      </button>
      <button
        type="button"
        onClick={ () => {
          history.push('/receitas-favoritas');
        } }
        data-testid="profile-favorite-btn"
      >
        Receitas Favoritas
      </button>
      <button
        type="button"
        onClick={ () => {
          localStorage.clear();
          history.push('/');
        } }
        data-testid="profile-logout-btn"
      >
        Sair
      </button>
      <Footer />
    </>
  );
}

export default Profile;
