import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveInProgress } from '../../redux/actions/details';
import { useIsMeal } from '../../services/customHooks';
import { loadFromStorage, makeListWithObj, saveOnStorage } from '../../services/utils';

function undefinedID(correctId, actualId, mealCocktail, params) {
  const { progress, dispatch } = params;
  const newProgress = {
    ...progress,
    [mealCocktail]: {
      ...progress[mealCocktail],
      [actualId]: [correctId * 1],
    },
  };
  dispatch(saveInProgress(newProgress));
}

function definedID(correctId, actualId, mealCocktail, params) {
  const { progress, dispatch } = params;
  if (progress[mealCocktail][actualId].includes(correctId)) {
    const newArray = progress[mealCocktail][actualId].filter((e) => e !== correctId);
    const newProgress = {
      ...progress,
      [mealCocktail]: {
        ...progress[mealCocktail],
        [actualId]: newArray,
      },
    };
    dispatch(saveInProgress(newProgress));
  } else {
    const newProgress = {
      ...progress,
      [mealCocktail]: {
        ...progress[mealCocktail],
        [actualId]: [
          ...progress[mealCocktail][actualId],
          correctId,
        ],
      },
    };
    dispatch(saveInProgress(newProgress));
  }
}

function addRecipeStep({ id }, params) {
  const stringId = id.replace(/stepRecipeCheckbox/i, '');
  const correctId = parseInt(stringId, 10);
  const { progress, actualRecipe, isMeal } = params;
  let mealCocktail = '';
  let actualId = 0;

  if (isMeal) {
    mealCocktail = 'meals';
    actualId = actualRecipe.idMeal;
  } else {
    mealCocktail = 'cocktails';
    actualId = actualRecipe.idBeverage;
  }
  console.log(progress[mealCocktail][actualId]);
  console.log('undefined?: ', progress[mealCocktail][actualId] === undefined);
  if (progress[mealCocktail][actualId] === undefined) {
    undefinedID(correctId, actualId, mealCocktail, params);
  } else {
    definedID(correctId, actualId, mealCocktail, params);
  }
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
    if (inProgressRecipes != null) {
      dispatch(saveInProgress(inProgressRecipes));
    }
  }, []);

  useEffect(() => {
    saveOnStorage('inProgressRecipes', progress);
  }, [progress]);

  const addParams = {
    isMeal,
    actualRecipe,
    progress,
    dispatch,
  };

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
              onChange={ ({ target }) => addRecipeStep(target, addParams) }
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
