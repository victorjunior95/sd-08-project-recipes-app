import React, { useContext, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import Context from '../context/Context';

function DetailsButtons({ route, id, page }) {
  const { disableButton, shouldRedirect, setShouldRedirect } = useContext(Context);
  const ids = JSON.parse(localStorage.getItem('inProgressRecipes')) || [];

  useEffect(() => {
    if (!Object.values(ids).includes(id)
    && window.location.href === `/${route}/${id}/`) {
      document.getElementById('start-recipe-btn').innerText = 'Iniciar Receita';
    }
  }, []);

  function SaveProgressRecipes(data) {
    let a = [];
    a = JSON.parse(localStorage.getItem('inProgressRecipes')) || [];
    a.push(data);
    localStorage.setItem('inProgressRecipes', JSON.stringify(a));
  }

  function SaveFinishedRecipes(data) {
    let a = [];
    a = JSON.parse(localStorage.getItem('finishedRecipes')) || [];
    a.push(data);
    localStorage.setItem('finishedRecipes', JSON.stringify(a));
  }

  if (shouldRedirect === id) return <Redirect to="/receitas-feitas" />;

  return (
    <div>
      {
        page === 'details' ? (
          <Link
            to={ `/${route}/${id}/in-progress` }
            className="last-btn"
            data-testid="start-recipe-btn"
            style={ { display: 'none' } }
            id="start-recipe-btn"
            onClick={ () => {
              ids.push(id);
              localStorage.setItem('inProgressRecipes', JSON.stringify(ids));
              SaveProgressRecipes(id);
            } }
          >
            Continuar Receita
            {/* { (Object.values(ids).includes(id))
              ? 'Continuar Receita'
              : 'Iniciar Receita' } */}
          </Link>
        ) : (
          <button
            to="/receitas-feitas"
            type="submit"
            className={ disableButton ? 'last-btn disable' : 'last-btn' }
            data-testid="finish-recipe-btn"
            id="finish-recipe-btn"
            disabled={ disableButton }
            onClick={ () => {
              localStorage.setItem('finishedRecipes', JSON.stringify(ids));
              SaveFinishedRecipes(id);
              setShouldRedirect(id);
            } }
          >
            Finalizar Receita
          </button>
        )
      }
    </div>
  );
}

DetailsButtons.propTypes = {
  route: PropTypes.string,
  page: PropTypes.string,
  id: PropTypes.string,
}.isRequired;

export default DetailsButtons;
