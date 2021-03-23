import React from 'react';
import { useHistory } from 'react-router';
import mealIcon from '../images/mealIcon.svg';

function FoodButton() {
  const history = useHistory();
  const handleClick = () => {
    history.push('/comidas');
  };
  return (
    <input
      type="image"
      src={ mealIcon }
      alt="Botão de Comidas"
      data-testid="food-bottom-btn"
      onClick={ handleClick }
    />
  );
}

export default FoodButton;
