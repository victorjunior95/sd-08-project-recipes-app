import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import fetchMealActionId from '../redux/actions/fetchMealId';
import '../CSS/Completed.css';
import ShareButton from '../components/ShareButton';
import LikeButton from '../components/LikeButton';
import { findKey } from '../services/index';

function ProgressMeal() {
  const { singleRecipe } = useSelector((state) => state.recipes);
  const [meatStorage, setMeatStorage] = useState([]);

  const arrayMeat = singleRecipe[0];
  const dispatch = useDispatch();

  const { pathname } = useLocation();
  const arrayId = pathname.split('/')[2];

  useEffect(() => {
    const fetchData = (id) => dispatch(fetchMealActionId(id));

    fetchData(arrayId);
  }, []);

  function saveLocalStorage(id, name) {
    const getStorage = localStorage.getItem('inProgressRecipes') && JSON.parse(localStorage.getItem('inProgressRecipes'));
    setMeatStorage(meatStorage.concat(name));
    if (getStorage) {
      const ingredient = getStorage.meals && getStorage.meals[id];
      let localProgress;
      if (ingredient) {
        localProgress = {
          meals: {
            [id]: [...ingredient, name],
          },
        };
      } else {
        localProgress = {
          meals: {
            [id]: [name],
          },
        };
      }
      localStorage.setItem('inProgressRecipes', JSON
        .stringify(Object.assign(getStorage, localProgress)));
    } else {
      localStorage.setItem('inProgressRecipes', JSON
        .stringify({ meals: { [id]: [name] } }));
    }
  }

  useEffect(() => {
    const storage = localStorage.getItem('inProgressRecipes') && JSON.parse(localStorage.getItem('inProgressRecipes')).meals;
    console.log(storage ? storage[arrayId] : []);
    setMeatStorage(storage ? storage[arrayId] : []);
  }, []);

  // function newLocal(id, name) {
  //   setMeatStorage([...meatStorage, name]);
  //   const localProgress = {
  //     meals: {
  //       [id]: [meatStorage.length === 0 ? name : meatStorage],
  //     },
  //   };
  //   localStorage.setItem('inProgressRecipes', JSON.stringify(Object.assign(localProgress)));
  // }

  const handleChecked = ({ target }) => {
    // const { parentNode } = event.target;
    // const { checked } = event.target;
    // if (checked) {
    //   // parentNode[0].className = 'completed';
    // } else {
    //   // parentNode[0].className = '';
    // }
    // const newStorage = [...meatStorage];
    // newStorage.slice(meatStorage.indexOf(target.value), 1);
    // newStorage.filter((element) => element !== target.value);
    // console.log(newStorage);
    // setMeatStorage(meatStorage.includes(target.value) ? newStorage : meatStorage.concat(target.value));
  };

  const createIngrediets = () => {
    const ingredient = findKey(arrayMeat, 'strIngredient');
    const measure = findKey(arrayMeat, 'strMeasure');

    return ingredient.map((nome, index) => {
      if (nome && meatStorage) {
        return (
          <div key={ index } data-testid={ `${index}-ingredient-step` }>
            <label
              htmlFor={ nome }
            >
              <input
                type="checkbox"
                id={ nome }
                name={ nome }
                value={ nome }
                onChange={ (event) => {
                  handleChecked(event);
                  saveLocalStorage(arrayId, nome);
                } }
                checked={ meatStorage && meatStorage.includes(nome) }
              />

              {`${nome} - ${measure[index]}`}
            </label>
          </div>
        );
      }
      return undefined;
    });
  };

  const renderMeal = () => (
    arrayMeat !== undefined && (
      <div>
        <img data-testid="recipe-photo" src={ arrayMeat.strMealThumb } alt="recipe" />
        <h1 data-testid="recipe-title">{ arrayMeat.strMeal }</h1>
        <ShareButton recipeId={ arrayMeat.idMeal } recipeType="comida" />
        <LikeButton />

        <p data-testid="recipe-category">{arrayMeat.strCategory}</p>

        Ingredients
        {createIngrediets()}

        Instructions
        <p data-testid="instructions">{arrayMeat.strInstructions}</p>

        <button
          data-testid="finish-recipe-btn"
          type="button"
        >
          Finalizar Receita
        </button>
      </div>
    ));

  return (
    <div>
      {renderMeal()}
    </div>
  );
}

export default ProgressMeal;
