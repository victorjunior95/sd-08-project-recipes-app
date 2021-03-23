import React from 'react';
import PropTypes from 'prop-types';
import '../styles/card.css';

const Card = ({ idMeal, imagePath, title, category }) => (
  <section key={ idMeal } className="card">
    <img src={ imagePath } alt={ title } />
    <p>{category}</p>
    <p>{title}</p>
  </section>
);

Card.propTypes = {
  idMeal: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Card;
