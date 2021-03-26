import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

class Footer extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div data-testid="footer">
        <Link to="/bebidas">
          <button
            type="button"
            data-testid="drinks-bottom-btn"
          >
            <img src={ drinkIcon } alt="drinkIcon" />
          </button>
        </Link>
        <button
          type="button"
          data-testid="explore-bottom-btn"
        >
          <img src={ searchIcon } alt="searchIcon" />
        </button>
        <Link to="/comidas">
          <button
            type="button"
            data-testid="food-bottom-btn"
          >
            <img src={ mealIcon } alt="mealIcon" />
          </button>
        </Link>
=======
      <div className="footer" data-testid="footer">
        <Link to="/bebidas">
          <img src={ drinkIcon } alt="drinkIcon" data-testid="drinks-bottom-btn" />
        </Link>
        <Link to="/explorar">
          <img
            src={ exploreIcon }
            alt="searchIcon"
            data-testid="explore-bottom-btn"
          />
        </Link>
        <Link to="/comidas">

          <img
            src={ mealIcon }
            alt="mealIcon"
            data-testid="food-bottom-btn"
          />
        </Link>

>>>>>>> f4dc305e5a68a50735f7878fed8a38b69c13b1ad
      </div>
    );
  }
}

export default Footer;
