import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import drinkIcon from '../../images/drinkIcon.svg'; 
import mealIcon from '../../images/mealIcon.svg'; 
import exploreIcon from '../../images/exploreIcon.svg'; 

function FooterButton({ toPage }) {
  const pages = {
    drinks: {
      image: drinkIcon,
      path: '/bebidas',
    },
    explore: {
      image: exploreIcon,
      path: '/explorar',
    },
    food: {
      image: mealIcon,
      path: '/comidas',
    },
  };

  return (
    <Link
      data-testid={ `${toPage}-bottom-btn` }
      to={ `${pages[toPage].path}` }
    >
      <img src={ pages[toPage].image } />
    </Link>
  );
}

export default FooterButton;
