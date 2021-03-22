import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../assets/images/drinkIcon.svg';
import exploreIcon from '../assets/images/exploreIcon.svg';
import mealIcon from '../assets/images/mealIcon.svg';

export default function Footer() {
  return (
    <div data-testid="footer" className="footerContainer">
      <Link to="/bebidas">
        <button
          type="button"
          data-testid="drinks-bottom-btn"
          className="footerButton"
          src={ drinkIcon }
        >
          <img src={ drinkIcon } alt="Menu de bebidas" />
        </button>
      </Link>

      <Link to="/explorar">
        <button
          type="button"
          data-testid="explore-bottom-btn"
          className="footerButton"
          src={ exploreIcon }
        >
          <img src={ exploreIcon } alt="Menu de exploração" />
        </button>
      </Link>

      <Link to="/comidas">
        <button
          type="button"
          data-testid="food-bottom-btn"
          className="footerButton"
          src={ mealIcon }
        >
          <img src={ mealIcon } alt="Menu de comidas" />
        </button>
      </Link>
    </div>
  );
}
