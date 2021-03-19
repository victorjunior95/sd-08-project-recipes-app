import React, { Component } from 'react';
import drinkIcon from '../images/drinkIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import mealIcon from '../images/mealIcon.svg';

class Footer extends Component {
  render() {
    const { history } = this.props;
    return (
      <div data-testid="footer">
        <button
          type="button"
          data-testid="drinks-bottom-btn"
        >
          <img src={ drinkIcon } alt="drinkIcon" />
        </button>
        <button
          type="button"
          data-testid="explore-bottom-btn"
        >
          <img src={ searchIcon } alt="searchIcon" />
        </button>
        <button
          type="button"
          data-testid="food-bottom-btn"
        >
          <img src={ mealIcon } alt="mealIcon" />
        </button>

        a
      </div>
    );
  }
}

export default Footer;
