import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ProfilePage({ history }) {
  const { pathname } = history.location;
  return (
    <>
      <Header title={ pathname } />
      <button type="button" onClick={ () => history.push('/receitas-feitas') }>
        Receitas Feitas
      </button>
      <button type="button" onClick={ () => history.push('receitas-favoritas') }>
        Receitas Favoritas
      </button>
      <button type="button" onClick={ () => history.push('/') }>
        Sair
      </button>
      <Footer />
    </>
  );
}

ProfilePage.propTypes = {
  history: PropTypes.element.isRequired,
};

export default ProfilePage;
