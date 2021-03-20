import React, { Component } from 'react';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

class Footer extends Component {
  render() {
    // const { history } = this.props;
    return (
      <div data-testid="footer" className="footer">
        <input
          type="image"
          src={ drinkIcon }
          alt="drinkIcon"
          data-testid="drinks-bottom-btn"
        />
        <input
          type="image"
          src={ exploreIcon }
          alt="exploreIcon"
          data-testid="explore-bottom-btn"
        />
        <input
          type="image"
          src={ mealIcon }
          alt="mealIcon"
          data-testid="food-bottom-btn"
        />
      </div>
    );
  }
}

export default Footer;
