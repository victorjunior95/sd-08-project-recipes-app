import React from 'react';
import { Card } from 'react-bootstrap';

function CardItens({ name, image, index }) {
  return (
    <Card
      style={ {
        width: '20rem',
        marginTop: '20px',
        boxShadow: 'rgba(0, 0, 0, 0.50) 0px 5px 15px',
      } }
      data-testid={ `${index}-recipe-card` }
    >
      <Card.Img
        variant="top"
        src={ image }
        data-testid={ `${index}-card-img` }
      />
      <Card.Body>
        <Card.Title data-testid={ `${index}-card-name` }>{name}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default CardItens;
