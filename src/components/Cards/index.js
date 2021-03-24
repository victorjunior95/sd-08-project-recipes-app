import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import './style.css';

function Cards(props) {
  const { name, thumbSrc, index } = props;
  return (
    <Card className="card mb-3" data-testid={ `${index}-recipe-card` }>
      <Card.Img
        variant="top"
        className="card-img"
        src={ thumbSrc }
        data-testid={ `${index}-card-img` }
      />
      <Card.Body>
        <Card.Title data-testid={ `${index}-card-name` } className="text-center">
          {name}
        </Card.Title>
      </Card.Body>
    </Card>
  );
}

export default Cards;

Cards.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  thumbSrc: PropTypes.string.isRequired,
};
