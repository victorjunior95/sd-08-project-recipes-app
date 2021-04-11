import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
// import drinkIcon from '../images/drinkIcon.svg';
// import explorerIcon from '../images/exploreIcon.svg';
// import mealIcon from '../images/mealIcon.svg';
import logoDrinks from '../images/Logo_drinkIcon.png';
import logoExplore from '../images/Logo_exploreIcon.png';
import logoMeals from '../images/Logo_mealIcon.png';

function Footer() {
  return (
    <footer data-testid="footer" className="footer">
      <Link to="/bebidas">
        <img
          data-testid="drinks-bottom-btn"
          src={ logoDrinks }
          alt="drinks"
          className="logo-size logo-space"
        />
      </Link>
      <Link to="/explorar">
        <img
          data-testid="explore-bottom-btn"
          src={ logoExplore }
          alt="explorer"
          className="logo-size logo-space"
        />
      </Link>
      <Link to="/comidas">
        <img
          data-testid="food-bottom-btn"
          src={ logoMeals }
          alt="meals"
          className="logo-size logo-space"
        />
      </Link>
    </footer>
  );
}

export default Footer;
