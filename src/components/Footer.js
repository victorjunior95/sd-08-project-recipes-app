import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import mealIcon from '../images/mealIcon.svg';

class Footer extends Component {
  render() {
    // const { history } = this.props;
    return (
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
      </div>
    );
  }
}

export default Footer;
