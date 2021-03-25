import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { startRecipe, endRecipe } from '../actions/recipes';

function ProgressButton({ type, id, ingredientsLength }) {
  const { pathname } = useLocation();
  const history = useHistory();
  const inProgress = pathname.split('/')[3] === 'in-progress';
  const { done, start, list } = useSelector((state) => state.recipes);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (inProgress) {
      const { strArea: area = '', strCategory: category = '',
        strAlcoholic: alcoholicOrNot = '', [`str${type}`]: name,
        [`str${type}Thumb`]: image, doneDate = Date.now(), strTags } = list[0];
      const tags = !strTags ? [] : strTags.split(',');
      const formatedRecipe = {
        id, area, category, alcoholicOrNot, name, image, type, doneDate, tags };
      dispatch(endRecipe(formatedRecipe));
      history.push('/receitas-feitas');
      return;
    }
    if (!Object.keys(start[type]).includes(id)) {
      dispatch(startRecipe(type, { [id]: [] }));
    }
    history.push(`${pathname}/in-progress`);
  };

  useEffect(() => {
    localStorage.setItem('doneRecipes', JSON.stringify(done));
  }, [done]);

  return (
    <div>
      { done.some(({ id: currId, type: currType }) => id === currId && type === currType)
          || (
            <button
              className="start"
              data-testid={ inProgress ? 'finish-recipe-btn' : 'start-recipe-btn' }
              type="button"
              onClick={ handleClick }
              disabled={ inProgress
                && (start[type][id] || []).length !== ingredientsLength }
            >
              { inProgress && 'Finalizar Receita' }
              { !inProgress && (Object.keys(start[type])
                .includes(id) ? 'Continuar Receita' : 'Iniciar Receita') }
            </button>
          )}
    </div>
  );
}

ProgressButton.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  ingredientsLength: PropTypes.number.isRequired,
};

export default ProgressButton;
