import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './profile.css';

function Profile({ history }) {
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user);
  return (
    <>
      <Header history={ history } />
      <br />
      <section className="section">
        <h1 className="email" data-testid="profile-email">{user.email}</h1>
      </section>
      <br />
      <section className="section">
        <Link
          className="button"
          to="/receitas-feitas"
          data-testid="profile-done-btn"
        >
          Receitas Feitas
        </Link>
        <br />
        <Link
          className="button"
          to="/receitas-favoritas"
          data-testid="profile-favorite-btn"
        >
          Receitas Favoritas
        </Link>
        <br />
        <Link
          className="button"
          onClick={ () => localStorage.clear() }
          to="/"
          data-testid="profile-logout-btn"
        >
          Sair
        </Link>
      </section>
      <Footer />
    </>
  );
}

Profile.propTypes = {
  history: PropTypes.string.isRequired,
};

export default Profile;
