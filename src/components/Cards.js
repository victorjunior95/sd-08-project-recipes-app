import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Cards extends Component {
  render() {
    const { strThumb, str, index, route } = this.props;
    return (
      <div data-testid={ `${index}-recipe-card` }>
        <Link to={ route }>
          <h1 data-testid={ `${index}-card-name` }>{str}</h1>
          <img data-testid={ `${index}-card-img` } src={ strThumb } alt={ str } />
        </Link>
      </div>
    );
  }
}

Cards.propTypes = {
  route: PropTypes.string.isRequired,
  strThumb: PropTypes.string.isRequired,
  str: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,

};

export default Cards;
