import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ProfilePage() {
  const history = useHistory();

  const getUser = () => {
    if (localStorage.getItem('user')) {
      const data = JSON.parse(localStorage.getItem('user'));
      return data.email;
    }
    return ' ';
  };

  const handleLogout = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <section className="content">
      <Header label="Perfil" Search={ () => '' } />
      <br />
      <br />
      <br />
      <Footer />
      <section className="profile">
        <div data-testid="profile-email">{getUser()}</div>
        <button
          type="button"
          data-testid="profile-done-btn"
          onClick={ () => history.push('/receitas-feitas') }
        >
          Receitas Feitas
        </button>
        <button
          type="button"
          data-testid="profile-favorite-btn"
          onClick={ () => history.push('/receitas-favoritas') }
        >
          Receitas Favoritas
        </button>
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ handleLogout }
        >
          Sair
        </button>
      </section>
    </section>
  );
}

export default ProfilePage;
