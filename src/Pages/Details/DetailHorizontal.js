import React, { useState } from 'react';
import { Alert, Card, Button, Container, Row } from 'react-bootstrap';
import { useRouteMatch } from 'react-router';
import shareIcon from '../../images/shareIcon.svg';

function DetailHorizontal() {
  const [show, setShow] = useState(false);
  const { url } = useRouteMatch();

  const feitas = [{
    id: '52771', // idMeal
    type: 'comida', // comida ou bebida
    area: 'Italian', // strArea
    category: 'Vegetarian', // strCategory
    alcoholicOrNot: '', // alcoholic-ou-non-alcoholic-ou-texto-vazio
    name: 'Spicy Arrabiata Penne', // strMeal
    image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg', // strMealThumb
    doneDate: '24/03/2021', // quando-a-receita-foi-concluida
    tags: ['Pasta', 'Curry'], // tag ou vazio
  },
  {
    id: '52772', // idMeal
    type: 'bebida', // comida ou bebida
    area: 'Brazil', // strArea
    category: 'Churrasco', // strCategory
    alcoholicOrNot: '', // alcoholic-ou-non-alcoholic-ou-texto-vazio
    name: 'Spicy Arrabiata', // strMeal
    image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg', // strMealThumb
    doneDate: '23/03/2021', // quando-a-receita-foi-concluida
    tags: ['Pasta'], // tag ou vazio
  }];

  return (
    <Container>
      {feitas.length > 0 ? feitas.map((recep, i) => (
        <Row key={ i }>
          <Card.Img
            variant="top"
            src={ recep.image }
            data-testid={ `${i}-horizontal-image` }
            style={ { width: '10rem' } }
          />
          <h3 data-testid={ `${i}-horizontal-top-text` }>{ recep.category }</h3>
          <h2 data-testid={ `${i}-horizontal-name` }>{ recep.name }</h2>
          <h2 data-testid={ `${i}-horizontal-done-date` }>
            Feita em:
            { recep.doneDate }
          </h2>
          <Button
            variant="link"
            onClick={ () => {
              setShow(true);
              navigator.clipboard.writeText(`http://localhost:3000${url}`);
            } }
          >
            <img
              alt="share"
              data-testid={ `${i}-horizontal-share-btn` }
              src={ shareIcon }
            />
          </Button>
          {recep.tags.length > 0 ? recep.tags.map((tag) => (
            <h3 key={ tag } data-testid={ `${i}-${tag}-horizontal-tag` }>{ tag }</h3>
          )) : <div />}
          {show && (
            <Alert variant="success" onClose={ () => setShow(false) } dismissible>
              <Alert.Heading>Link copiado!</Alert.Heading>
            </Alert>
          )}
        </Row>
      )) : <div />}
      <Card style={ { width: '18rem' } }>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default DetailHorizontal;
