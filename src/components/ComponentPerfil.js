import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ContextRecipes from '../context/ContextRecipes';

function ComponentPerfil() {
  const { setHeaderInfo, setUserEmail, userEmail,
  } = useContext(ContextRecipes);

  const history = useHistory();

  useEffect(() => {
    setHeaderInfo({
      pageTitle: 'Perfil',
      showSearchIcon: false,
    });
    if (JSON.parse(localStorage.getItem('user')) !== null) {
      setUserEmail(JSON.parse(localStorage.getItem('user')).email);
    } else {
      setUserEmail('name@email.com')
    }
  }, [setHeaderInfo, setUserEmail]);

  return (
    <section className="buttons-perfil">
      <h1
        data-testid="profile-email"
      >
        { userEmail }
      </h1>
      <button
        className="btn btn-primary"
        type="button"
        data-testid="profile-done-btn"
        onClick={ () => history.push('/receitas-feitas') }
      >
        Receitas Feitas
      </button>
      <button
        className="btn btn-primary"
        type="button"
        data-testid="profile-favorite-btn"
        onClick={ () => history.push('/receitas-favoritas') }
      >
        Receitas Favoritas
      </button>
      <button
        className="btn btn-primary"
        type="button"
        data-testid="profile-logout-btn"
        onClick={ () => {
          history.push('/');
          localStorage.clear();
        } }
      >
        Sair
      </button>
    </section>
  );
}

export default ComponentPerfil;
