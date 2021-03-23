import React from 'react';
import { useHistory } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';

function DrinksButton() {
  const history = useHistory();
  const handleClick = () => {
    history.push('/bebidas');
  };

  return (
    <input
      type="image"
      src={ drinkIcon }
      alt="Botão de Bebidas"
      data-testid="drinks-bottom-btn"
      onClick={ handleClick }
    />
  );
}

export default DrinksButton;
