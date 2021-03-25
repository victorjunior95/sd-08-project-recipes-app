import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer" data-testid="footer">
        <Link to="/bebidas" data-testid="drinks-bottom-btn">
          <img src={ drinkIcon } alt="Drink Icon" />
        </Link>
        <Link to="/bebidas" data-testid="explore-bottom-btn">
          <img src={ exploreIcon } alt="Explore Icon" />
        </Link>
        <Link to="/comidas" data-testid="food-bottom-btn">
          <img src={ mealIcon } alt="Food Icon" />
        </Link>
      </footer>
    );
  }
}
