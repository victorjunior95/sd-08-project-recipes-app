import React from 'react';
import PropTypes from 'prop-types';

const SIX_FIRST_RESULTS = 6;
const VISIBLE = 'visible';
const NOT_VISIBLE = 'notVisible';

const CardCarousel = (props) => {
  // const [page, setPage] = useState(0);
  console.log(Object.keys(props));
  const { foods, drinks } = props;
  // console.log(foods.slice(0, SIX_FIRST_RESULTS));
  let data;
  if (foods) {
    data = foods;
  }
  if (drinks) {
    data = drinks;
  }
  console.log(data.slice(0, SIX_FIRST_RESULTS));
  return (
    <div>
      {data.slice(0, SIX_FIRST_RESULTS).map((recipe, index) => (
        index > 1
          ? (
            <div
              key={ index }
              data-testid={ `${index}-recomendation-card` }
              className={ NOT_VISIBLE }
            >
              <button type="button">Prev</button>
              <div>
                <img src={ recipe.strMealThumb } alt="data" data-testid="recipe-photo" />
                <h3 data-testid={ `${index}-recomendation-title` }>{recipe.strMeal}</h3>
                <p
                  data-testid={ `${index}-recomendation-category` }
                >
                  {recipe.strCategory}
                </p>
              </div>
              <button type="button">Next</button>
            </div>
          ) : (
            <div
              key={ index }
              data-testid={ `${index}-recomendation-card` }
              className={ VISIBLE }
            >
              <button type="button">Prev</button>
              <div>
                <img src={ recipe.strMealThumb } alt="data" data-testid="recipe-photo" />
                <h3 data-testid={ `${index}-recomendation-title` }>{recipe.strMeal}</h3>
                <p
                  data-testid={ `${index}-recomendation-category` }
                >
                  {recipe.strCategory}
                </p>
              </div>
              <button type="button">Next</button>
            </div>
          )
      ))}
    </div>
  );
};

CardCarousel.propTypes = {
  foods: PropTypes.arrayOf({}),
}.isRequired;

export default CardCarousel;
