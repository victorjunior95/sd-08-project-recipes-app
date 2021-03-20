import React from 'react';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  return (
    <footer className="footer-container" data-testid="footer">
      <button className="main-buttons" data-testid="drinks-bottom-btn" type="button">
        <img src={ drinkIcon } alt="drinks" />
      </button>
      <button className="main-buttons" data-testid="explore-bottom-btn" type="button">
        <img src={ exploreIcon } alt="explore" />
      </button>
      <button className="main-buttons" data-testid="food-bottom-btn" type="button">
        <img src={ mealIcon } alt="meal" />
      </button>
    </footer>
  );
}

export default Footer;
