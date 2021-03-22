import React from 'react';
import DrinkIcon from '../images/drinkIcon.svg';
import ExploreIcon from '../images/exploreIcon.svg';
import MealIcon from '../images/mealIcon.svg';

function Footer() {
  return (
    <footer data-testid="footer" className="g6-footer">
      <button
        type="button"
        data-testid="drinks-bottom-btn"
        onClick=""
        className="g6-footer-button"
      >
        <img src={ DrinkIcon } alt="Bebidas" />
      </button>
      <button
        type="button"
        data-testid="explore-bottom-btn"
        onClick=""
        className="g6-footer-button"
      >
        <img src={ ExploreIcon } alt="Explorar" />
      </button>
      <button
        type="button"
        data-testid="food-bottom-btn"
        onClick=""
        className="g6-footer-button"
      >
        <img src={ MealIcon } alt="Comidas" />
      </button>
    </footer>
  );
}

export default Footer;
