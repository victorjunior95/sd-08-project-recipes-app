import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';

function ProfilePage({ history }) {
  return (
    <>
      <Header />
      <button type="button" onClick={ () => history.push('/receitas-feitas') }>
        Receitas Feitas
      </button>
      <button type="button" onClick={ () => history.push('receitas-favoritas') }>
        Receitas Favoritas
      </button>
      <button type="button" onClick={ () => history.push('/') }>
        Sair
      </button>
    </>
  );
}

ProfilePage.propTypes = {
  history: PropTypes.element.isRequired,
};

export default ProfilePage;
