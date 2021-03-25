import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

import './ReceitasProgressCheckbox.css';

function DetailIngredientsProgress(props) {
  const { ingredients, measures, setCheckBox, checkbox } = props;
  return (
    <section>
      <h1>Ingredientes</h1>
      <Form>
        { ingredients.map((ingredient, index) => (
          <div data-testid={ `${index}-ingredient-step` } key={ index }>
            <Form.Check
              className="checkbox"
              type="checkbox"
              value=""
              defaultChecked={ true }
              onChange={ (e) => {
                if (e.target.checked === true) {
                  setCheckBox(index);
                } else if (e.target.checked === false) {
                  setCheckBox(checkbox - 1);
                }
              } }
              id="flexCheckChecked"
              label={ `${ingredient} - ${measures[index] || ''}` }
            />
          </div>
        ))}
      </Form>
    </section>
  );
}

DetailIngredientsProgress.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string),
  measures: PropTypes.arrayOf(PropTypes.string),
};

DetailIngredientsProgress.defaultProps = {
  ingredients: [],
  measures: [],
};

export default DetailIngredientsProgress;
