import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

function DetailsButtons({ route, id, page }) {
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
              localStorage.setItem('inProgressRecipes', JSON.stringify(id));
            } }
          >
            { (id === JSON.parse(localStorage.getItem('inProgressRecipes')))
              ? 'Continuar Receita' : 'Iniciar Receita' }
          </Link>

        ) : (
          <Link
            to="/receitas-feitas"
            type="submit"
            className="last-btn"
            data-testid="finish-recipe-btn"
            onClick={ () => {
              localStorage.setItem('finishedRecipes', JSON.stringify(id));
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
