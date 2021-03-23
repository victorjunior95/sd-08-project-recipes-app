import React from 'react';

function MainFoodsCard(props) {
  const { dataFoods, index } = props;
  const { strMeal, strMealThumb } = dataFoods;
  return (
    <div src="strMealThumb" data-testid={ `${index}-recipe-card` } className="MainCard">
      <img
        data-testid={ `${index}-card-img` }
        className="img"
        src={ strMealThumb }
        alt={ strMeal }
      />
      <p
        data-testid={ `${index}-card-name` }
      >
        {strMeal}
      </p>
    </div>
  );
}

export default MainFoodsCard;
