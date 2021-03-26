import React from 'react';
import Header from '../components/Header';

export default function Perfil() {
  return (
    <div>
      <Header pageTitle="Perfil" />
      <h5 data-testid="profile-email">Aqui vem um E-mail</h5>
      <button
        className="g6-header-button"
        type="button"
        data-testid="profile-done-btn"
      >
        Receitas Feitas

      </button>
      <button
        className="g6-header-button"
        type="button"
        data-testid="profile-favorite-btn"
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
