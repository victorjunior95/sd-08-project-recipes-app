import React from 'react';
import { useHistory } from 'react-router';
import Header from '../components/Header';

export default function Perfil() {
  const history = useHistory();

  const handleButton = (target) => {
    history.push(`/${target}`);
  };
  return (
    <div>
      <Header pageTitle="Perfil" />
      <div data-testid="profile-email">Aqui vem um E-mail</div>
      <button
        className="g6-header-button"
        type="button"
        data-testid="profile-done-btn"
        onClick={ () => handleButton('receitas-feitas') }
      >
        Receitas Feitas

      </button>
      <button
        className="g6-header-button"
        type="button"
        data-testid="profile-favorite-btn"
        onClick={ () => handleButton('receitas-favoritas') }
      >
        Receitas Favoritas

      </button>
      <button
        className="g6-header-button"
        type="button"
        data-testid="profile-logout-btn"
      >
        Sair

      </button>
    </div>
  );
}
