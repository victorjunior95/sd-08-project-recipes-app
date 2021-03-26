import React, { useEffect, useContext, useState } from 'react';
import components from '../components';
import api from '../services';
import RecipesContext from '../core/RecipesContext';
import { MAIN_FOOD_CARD_LENGTH_12 } from '../constants';

function ExploreOrigination() {
  const { setMealArea, mealArea } = useContext(RecipesContext);
  const [input, setInput] = useState('American');
  const [data, setData] = useState([]);

  useEffect(() => {
    api.fetchAreaList()
      .then((response) => response.json())
      .then((result) => setMealArea(result.meals));
    if (input) {
      api.fetchFilterMealByArea(input)
        .then((response) => response.json())
        .then((result) => setData(result.meals));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);
  console.log(data);
  return (
    <div>
      <components.Header title="Explorar Origem" />
      <main className="explore-container">
        <select
          onChange={ ({ target }) => setInput(target.value) }
          className="custom-select"
          data-testid="explore-by-area-dropdown"
        >
          {mealArea.map(({ strArea }, index) => (
            <option
              onChange={ ({ target }) => setInput(target.value) }
              value={ strArea }
              data-testid={ `${strArea}-option` }
              key={ index }
            >
              {strArea}
            </option>
          ))}
        </select>
        <div className="home-container">
          {data && data.slice(0, MAIN_FOOD_CARD_LENGTH_12).map((
            { strMeal, idMeal, strMealThumb }, index,
          ) => (
            <div key={ idMeal } className="MainCard" data-testid={ `${index}-recipe-card` }>
              <img data-testid={ `${index}-card-img` } className="img" src={ strMealThumb } alt="strMeal" />
              <p data-testid={ `${index}-card-name` }>{strMeal}</p>
            </div>
          ))}
        </div>
      </main>
      <components.Footer />
    </div>
  );
}

export default ExploreOrigination;
