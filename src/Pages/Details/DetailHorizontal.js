import React, { useState } from 'react';
import { Alert, Card, Button, Container, Row, Col } from 'react-bootstrap';
import Detail from './DetailHorizontalII';

function DetailHorizontal() {
  const [show, setShow] = useState(false);

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
        <Card key={ i }>
          <Row>
            <Col>
              <Card.Img
                src={ recep.image }
                style={ { width: '9rem' } }
                data-testid={ `${i}-horizontal-image` }
              />
            </Col>
            <Col>
              <Card.Body>
                <Detail index={ i } click={ setShow } recepe={ recep } />
                <Card.Subtitle
                  data-testid={ `${i}-horizontal-name` }
                >
                  { recep.name }
                </Card.Subtitle>
                <Card.Text
                  data-testid={ `${i}-horizontal-done-date` }
                >
                  Feita em:
                  { recep.doneDate }
                </Card.Text>
                {recep.tags.length > 0 ? recep.tags.map((tag) => (
                  <Button
                    variant="secondary"
                    key={ tag }
                    data-testid={ `${i}-${tag}-horizontal-tag` }
                  >
                    { tag }
                  </Button>
                )) : <div />}
              </Card.Body>
            </Col>
          </Row>
          {show && (
            <Alert variant="success" onClose={ () => setShow(false) } dismissible>
              <Alert.Heading>Link copiado!</Alert.Heading>
            </Alert>
          )}
        </Card>
      )) : <div />}
    </Container>
  );
}

export default DetailHorizontal;
