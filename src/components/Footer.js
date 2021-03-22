import React, { Component } from 'react';
import PropTypes from 'prop-types';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

class Footer extends Component {
  render() {
    const { match, location, history } = this.props;
    console.log(match, location, history);
    return (
      <div data-testid="footer" className="footer">
        <input
          type="image"
          src={ drinkIcon }
          alt="drinkIcon"
          data-testid="drinks-bottom-btn"
          onClick={ () => history.push('/bebidas') }
        />
        <input
          type="image"
          src={ exploreIcon }
          alt="exploreIcon"
          data-testid="explore-bottom-btn"
          onClick={ () => history.push('/explorar') }
        />
        <input
          type="image"
          src={ mealIcon }
          alt="mealIcon"
          data-testid="food-bottom-btn"
          onClick={ () => history.push('/comidas') }
        />
      </div>
    );
  }
}

Footer.propTypes = {
  match: PropTypes.shape.isRequired,
  location: PropTypes.shape.isRequired,
  history: PropTypes.shape.isRequired,
};

export default Footer;
