import React from 'react';
import { useHistory } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  const history = useHistory();

  return (
    <div data-testid="footer" className="footer">
      <button type="button" onClick={ () => history.push('/bebidas') }>
        <img
          src={ drinkIcon }
          data-testid="drinks-bottom-btn"
          alt="icone drinks"
        />
      </button>
      <button type="button" onClick={ () => history.push('/explorar') }>
        <img
          src={ exploreIcon }
          data-testid="explore-bottom-btn"
          alt="icone explore"
        />
      </button>
      <button type="button" onClick={ () => history.push('/comidas') }>
        <img
          src={ mealIcon }
          data-testid="food-bottom-btn"
          alt="icone food"
        />
      </button>
    </div>
  );
}

export default Footer;
