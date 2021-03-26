import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

function Card(props) {
  const { id, name, img, index, onClick } = props;
  return (
    <div
      name={ id }
      className="card-container"
      data-testid={ `${index}-recipe-card` }
      onClick={ onClick }
      role="button"
      tabIndex={ index }
      onKeyDown={ console.log('KeyPressed') }
    >
      <h4 data-testid={ `${index}-card-name` }>{name}</h4>
      <img src={ img } alt={ name } data-testid={ `${index}-card-img` } />
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default Card;
