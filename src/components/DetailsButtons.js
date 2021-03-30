import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

function DetailsButtons({ route, id, page }) {
  // https://stackoverflow.com/questions/16083919/push-json-objects-to-array-in-localstorage
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

  return (
    <div>
      {
        page === 'details' ? (
          <Link
            to={ `/${route}/${id}/in-progress` }
            className="last-btn"
            data-testid="start-recipe-btn"
            id="start-recipe-btn"
            onClick={ () => {
              SaveProgressRecipes(id);
            } }
          >
            { localStorage.getItem('inProgressRecipes')
              && JSON.parse(localStorage.getItem('inProgressRecipes'))
                .some((item) => item === id)
              ? 'Continuar Receita' : 'Iniciar Receita' }
          </Link>

        ) : (
          <Link
            to="/receitas-feitas"
            type="submit"
            className="last-btn"
            data-testid="finish-recipe-btn"
            onClick={ () => {
              SaveFinishedRecipes(id);
            } }
            // disabled={ document.querySelectorAll('.checkbox').checked }
          >
            Finalizar Receita
          </Link>
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
