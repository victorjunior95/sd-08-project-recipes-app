import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import './checkBoxIngredient.css';
import Context from '../../contextApi/Context';

const CheckBoxIngredients = ({ object, title }) => {

  const { setProgressRecipes, inProgressRecipes } = useContext(Context);

  const mealId = object.idMeal;
  const drinkId = object.idDrink

  // const isInProgressRecipe = () => {
  //   if (JSON.parse(localStorage.getItem("inProgressRecipes"))) {
  //     return true
  //   }
  // }

  // Gerando a key ID
  useEffect(() => {
    const recipesToStorage =(JSON.parse(localStorage.getItem("inProgressRecipes")))
    if (recipesToStorage && recipesToStorage.meals !== {}){
      if (mealId && title === "Comidas") {
        setProgressRecipes({
            ... inProgressRecipes, meals: {
              ...inProgressRecipes.meals, [mealId] : [],
            }
          }
        )
      } 
      else if (drinkId && title === "Bebidas") {
        setProgressRecipes( (estado) => {
          return( {
            ... estado, cocktails: {
              ...estado.cocktails, [drinkId] : [],
            }
          })
        })
      }
    }
  }, [])

// Salvando no localStorage
  useEffect(() => {
    const ingredientsFromLocalStorage = JSON.parse(localStorage.getItem("inProgressRecipes"))
    const updatedIngredients = inProgressRecipes

    localStorage.setItem('inProgressRecipes', JSON.stringify({...ingredientsFromLocalStorage, ...updatedIngredients}))
  }, [inProgressRecipes])





  const addIngredient = (event, id, recipe) => {
    setProgressRecipes({
      ...inProgressRecipes, [recipe]: { ...inProgressRecipes[recipe],
        [id] : [...inProgressRecipes[recipe][id], object[event.target.name] ],
      }
    })
  }

  const removeIngredient = (event, id, recipe) => {
    const filteredIngredients = inProgressRecipes[recipe][id].filter(ingredient=> ingredient !== object[event.target.name] );
    setProgressRecipes({
      ...inProgressRecipes, [recipe]: { ...inProgressRecipes[recipe],
        [id] : [...filteredIngredients],
      }
    })
  }

  const adOrRemoveIngredient = (event, id, recipe) => {
    if (!event.target.checked) {
      removeIngredient(event, id, recipe)
    } else {
      addIngredient(event, id, recipe)
    }
  }


// adicionando ingredientes no array da respectiva Key id
  const handleClick = (event) => {
    if (title === "Comidas") {
      adOrRemoveIngredient(event, mealId, "meals");
      }
    else {
      adOrRemoveIngredient(event, drinkId, "cocktails")
    }
  }
  
  const renderIngredientList = () => {
    const listKeys = Object.keys(object);
    const ingredients = listKeys.filter((key) => key.includes('strIngredient'));

    const listKeysMeasure = Object.keys(object);
    const measures = listKeysMeasure.filter((key) => key.includes('strMeasure'))

    return ingredients.map((ingredient, index) => {
      if (object[ingredient]) {
        return (
          <div key={ingredient} className="mb-3" data-testid={ `${index}-ingredient-step` }>
            <input
              className="checkClass"
              type="checkbox"
              name={ingredient}
              id={ingredient}
              onClick={handleClick}
              // ref={ createRef }
              />
            <label
              htmlFor={ingredient}
              className="strikethrough"
            >
              {`${object[ingredient]} - ${object[measures[index]]}`}
            </label>
          </div>
        )
      }
      return true;
    });
  };

  return (
    <Form className="mb-3">
      Ingredientes:
      {renderIngredientList()}
    </Form>
  );
};

CheckBoxIngredients.propTypes = {
  title: PropTypes.string.isRequired,
  object: PropTypes.shape({
    strMealThumb: PropTypes.string,
    strDrinkThumb: PropTypes.string,
    strMeal: PropTypes.string,
    strDrink: PropTypes.string,
  }).isRequired,
  index: PropTypes.string.isRequired,
};

export default CheckBoxIngredients;