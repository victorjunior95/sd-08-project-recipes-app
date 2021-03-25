import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

import './ReceitasProgressCheckbox.css';

function DetailIngredientsProgress(props) {
  const { ingredients, measures, checkbox } = props;
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
              defaultChecked={ false }
              onChange={ (e) => {
                if (e.target.checked === true) {
                  checkbox(index, true);
                } else if (e.target.checked === false) {
                  checkbox(index, false);
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
