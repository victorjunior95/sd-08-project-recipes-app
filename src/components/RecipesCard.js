import React from 'react';

function RecipesCard(props) {
  const { index, meal } = props;
  return (
    <div data-testid={ `${index}-recipe-card` }>
      <p data-testid={ `${index}-card-name` }>{meal.strMeal}</p>
      <img src={ meal.strMealThumb } data-testid={ `${index}-card-img` } alt="teste" />
    </div>
  );
}

export default RecipesCard;
