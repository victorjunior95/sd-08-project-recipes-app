import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import drinkIcon from '../images/drinkIcon.svg';
import explorerIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  return (
    <footer data-testid="footer" className="footer">
      <Link to="/bebidas">
        <img data-testid="drinks-bottom-btn" src={ drinkIcon } alt="drinks" />
      </Link>
      <Link to="/explorar">
        <img data-testid="explore-bottom-btn" src={ explorerIcon } alt="explorer" />
      </Link>
      <Link to="/comidas">
        <img data-testid="food-bottom-btn" src={ mealIcon } alt="meals" />
      </Link>
    </footer>
  );
}

export default Footer;
