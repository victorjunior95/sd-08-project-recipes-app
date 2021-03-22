import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ProfilePage() {
  const history = useHistory();
  const { email } = JSON.parse(localStorage.getItem('user'));
  const removeLocalStorage = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('mealsToken');
    localStorage.removeItem('cocktailsToken');
    localStorage.removeItem('doneRecipes');
    localStorage.removeItem('favoriteRecipes');
    localStorage.removeItem('inProgressRecipes');
    history.push('/');
  };

  return (
    <>
      <Header />
      <span data-testid="profile-email">{email}</span>
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
      <Link to="/">
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ removeLocalStorage }
        >
          Sair
        </button>
      </Link>
      <Footer />
    </>
  );
}

ProfilePage.propTypes = {
  history: PropTypes.element.isRequired,
};

export default ProfilePage;
