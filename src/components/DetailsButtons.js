import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

function DetailsButtons({ route, id, page }) {
  const ids = JSON.parse(localStorage.getItem('inProgressRecipes')) || [];
  console.log(ids);
  // const { ids, setaIds } = useContext(Context);

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
          <Link
            to="/receitas-feitas"
            type="submit"
            className="last-btn"
            data-testid="finish-recipe-btn"
            onClick={ () => {
              localStorage.setItem('finishedRecipes', JSON.stringify(ids));
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
