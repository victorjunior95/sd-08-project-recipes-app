import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// import PropTypes from 'prop-types';

class Cards extends Component {
  render() {
    const { strThumb, str, index, id, title } = this.props;
    return (
      <Link
        to={
          title === 'Comidas'
            ? `/comidas/${id}`
            : `/bebidas/${id}`
        }
      >
        <div data-testid={ `${index}-recipe-card` }>
          <h1 data-testid={ `${index}-card-name` }>{str}</h1>
          <img data-testid={ `${index}-card-img` } src={ strThumb } alt={ str } />
        </div>
      </Link>
    );
  }
}

Cards.propTypes = {
  strThumb: PropTypes.string.isRequired,
  str: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Cards;
