import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

const Footer = () => (
  <footer data-testid="footer" className="navbar fixed-bottom">
    <Link to="/bebidas">
      <button type="button">
        <img
          src={ drinkIcon }
          alt="ícone drink"
          data-testid="drinks-bottom-btn"
        />
      </button>
    </Link>
    <Link to="/explorar">
      <button type="button">
        <img
          src={ exploreIcon }
          alt="ícone explorar"
          data-testid="explore-bottom-btn"
        />
      </button>
    </Link>
    <Link to="/comidas">
      <button type="button">
        <img
          src={ mealIcon }
          alt="ícone receitas"
          data-testid="food-bottom-btn"
        />
      </button>
    </Link>
  </footer>
);

export default Footer;
