import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../../images/drinkIcon.svg';
import mealIcon from '../../images/mealIcon.svg';
import exploreIcon from '../../images/exploreIcon.svg';

export default function Footer() {
  return (
    <footer className="footer" data-testid="footer">
      <Link to="/bebidas">
        <img src={ drinkIcon } alt="Drnks" data-testid="drinks-botton-btn" />
      </Link>
      <Link to="/explorar">
        <img src={ exploreIcon } alt="Explore" data-testId="explore-bottom-btn" />
      </Link>
      <Link to="/comidas">
        <img src={ mealIcon } alt="Meals" data-testid="food-botton-btn" />
      </Link>
    </footer>
  );
}
