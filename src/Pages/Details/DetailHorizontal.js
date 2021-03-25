import React, { useState } from 'react';
import { Alert, Card, Button, Container, Row, Col } from 'react-bootstrap';
import { connectAdvanced } from 'react-redux';
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
        <Card key={ i }>
          <Row>
            <Col>
              <Card.Img src={ recep.image } style={ { width: '10rem' } } />
            </Col>
            <Col>
              <Card.Body>
                <Card.Title>{ recep.name }</Card.Title>
                <Card.Subtitle>{ recep.category }</Card.Subtitle>
                <Card.Text>{ recep.doneDate }</Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      )) : <div />}
    </Container>
  );
}

export default DetailHorizontal;

{/* <Container>
{feitas.length > 0 ? feitas.map((recep, i) => (
  <Card key={ i } style={ { width: '18rem', display: 'flex' } }>
    <Card.Img
      variant="top"
      src={ recep.image }
      data-testid={ `${i}-horizontal-image` }
    />
    <Card.Body>
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
    </Card.Body>
  </Card>
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
</Container> */}
