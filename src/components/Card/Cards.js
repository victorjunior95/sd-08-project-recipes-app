import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Cards = ({ title, object, index }) => (
  <Card
    data-testid={ `${index}-recipe-card` }
    style={ { width: '18rem' } }
  >
    <Card.Img
      data-testid={ `${index}-card-img` }
      variant="top"
      src={ (title === 'Comidas') ? object.strMealThumb : object.strDrinkThumb }
    />
    <Card.Body>
      <Card.Title
        data-testid={ `${index}-card-name` }
      >
        { (title === 'Comidas') ? object.strMeal : object.strDrink}
      </Card.Title>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
);
Cards.propTypes = {
  title: PropTypes.string.isRequired,
  object: PropTypes.shape({
    strMealThumb: PropTypes.string,
    strDrinkThumb: PropTypes.string,
    strMeal: PropTypes.string,
    strDrink: PropTypes.string,
  }).isRequired,
  index: PropTypes.string.isRequired,
};

export default Cards;
