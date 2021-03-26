import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveInProgress } from '../../redux/actions/details';
import { useIsMeal } from '../../services/customHooks';
import { loadFromStorage, makeListWithObj, saveOnStorage } from '../../services/utils';

function addRecipeStep({ id }, isMeal, actualRecipe) {
  console.log(id);
}

export default function StepList() {
  const isMeal = useIsMeal();
  const actualRecipe = useSelector((state) => state.detailsReducer.actualRecipe);
  const progress = useSelector((state) => state.detailsReducer.progress);
  const strIngredient = 'strIngredient';
  const strMeasure = 'strMeasure';
  const arrayIngredients = makeListWithObj(actualRecipe, strIngredient);
  const arrayMeasures = makeListWithObj(actualRecipe, strMeasure);

  const dispatch = useDispatch();

  useEffect(() => {
    const inProgressRecipes = loadFromStorage('inProgressRecipes');
    if (inProgressRecipes === null) {
      saveOnStorage('inProgressRecipes', progress);
    } else {
      dispatch(saveInProgress(inProgressRecipes));
    }
  }, []);

  return (
    <div>
      <h1>Ingredients</h1>
      <ul className="ingredients-list">
        { arrayIngredients.map((e, i) => (
          <li
            data-testid={ `${i}-ingredient-step` }
            key={ `ReactKey${e}${i}` }
          >
            <input
              type="checkbox"
              id={ `stepRecipeCheckbox${i}` }
              onChange={ ({ target }) => addRecipeStep(target, isMeal, actualRecipe) }
            />
            -
            {e}
            -
            { arrayMeasures[i] }
          </li>
        )) }
      </ul>
    </div>
  );
}
