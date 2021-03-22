import React from 'react';

import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';

function Footer() {
  return (
    <section>
      <footer
        className="footer"
        data-testid="footer"
      >
        <ul>
          <a href="/bebidas" data-testid="drinks-bottom-btn">
            <img
              src={ drinkIcon }
              alt="Footer icon"
              data-testid="drinks-bottom-btn"
            />
            Drinks
          </a>
          <a href="#" data-testid="explore-bottom-btn">
            <img
              src={ exploreIcon }
              alt="Footer icon"
              data-testid="explore-bottom-btn"
            />
            Explorar
          </a>
          <a href="/comidas" data-testid="food-bottom-btn">
            <img
              src={ mealIcon }
              alt="Footer icon"
              data-testid="food-bottom-btn"
            />
            Comidas
          </a>
        </ul>
      </footer>
    </section>

  );
}

export default Footer;
