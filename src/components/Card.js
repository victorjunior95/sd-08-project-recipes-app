import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ index, name, thumbnail }) => {
  console.log(index);
  console.log(name);
  console.log(thumbnail);
  return (
    <div data-testid={ `${index}-recipe-card` }>
      <p data-testid={ `${index}-card-name` }>{name}</p>
      <img src={ thumbnail } alt="Foto da receita" data-testid={ `${index}-card-img` } />
    </div>
  );
};
Card.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default Card;
