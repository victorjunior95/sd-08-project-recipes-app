import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

function Card(props) {
  const { id, name, img } = props;
  return (
    <div name={ id } className="card-container">
      <h4>{name}</h4>
      <img src={ img } alt={ name } />
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Card;
