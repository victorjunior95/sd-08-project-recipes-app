import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ProfilePage(history) {
  const { pathname } = history.location;
  return (
    <>
      <Header title={ pathname } />
      <Link to="/receitas-feitas">
        <button type="button">
          Receitas Feitas
        </button>
      </Link>
      <Link to="/receitas-favoritas">
        <button type="button">
          Receitas Favoritas
        </button>
      </Link>
      <Link to="/">
        <button type="button">
          Sair
        </button>
      </Link>
      <Footer />
    </>
  );
}

export default ProfilePage;
