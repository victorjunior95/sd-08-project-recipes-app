import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

function ProfilePage() {
  return (
    <>
      <Header />
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
    </>
  );
}

export default ProfilePage;
