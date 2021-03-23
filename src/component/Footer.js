import React from 'react';

import Drinks from '../images/drinkIcon.svg';
import Explore from '../images/exploreIcon.svg';
import Foods from '../images/mealIcon.svg';

const BottomMenu = () => (
  <footer style={ { position: 'fixed', bottom: '0px' } } data-testid="footer">
    <a
      href="/bebidas"
      src={ Drinks }
      data-testid="drinks-bottom-btn"
    >
      Bebidas
    </a>

    <a
      href="/explorar"
      src={ Explore }
      data-testid="explore-bottom-btn"
    >
      Explorar
    </a>

    <a
      href="/comidas"
      src={ Foods }
      data-testid="food-bottom-btn"
    >
      Comidas
    </a>
  </footer>
);

export default BottomMenu;
