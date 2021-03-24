import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import shareIcon from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import './checkBoxIngredient.css';

const CheckBoxIngredients = ({ object }) => {

  

  const renderIngredientList = () => {
    const listKeys = Object.keys(object);
    const ingredients = listKeys.filter((key) => key.includes('strIngredient'));

    const listKeysMeasure = Object.keys(object);
    const measures = listKeysMeasure.filter((key) => key.includes('strMeasure'));

    return ingredients.map((ingredient, index) => {
      if (object[ingredient]) {
        return (
          <div key={ingredient} className="mb-3" data-testid={ `${index}-ingredient-step` }>
            <input
              type="checkbox"
              name={ingredient}
              id={ingredient}
              />
            <label
              for={ingredient}
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