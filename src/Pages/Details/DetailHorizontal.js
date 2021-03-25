import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import shareIcon from '../../images/shareIcon.svg';

function DetailHorizontal() {
  const dez = 10;
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
          <img
            alt={ recep.image }
            data-testid={ `${i}-horizontal-image` }
            src={ recep.image }
          />
          <h3 data-testid={ `${i}-horizontal-top-text` }>{ recep.category }</h3>
          <h2 data-testid={ `${i}-horizontal-name` }>{ recep.name }</h2>
          <h2 data-testid={ `${i}-horizontal-done-date` }>
            Feita em:
            { recep.doneDate }
          </h2>
          <Button variant="link">
            <img
              alt="share"
              data-testid={ `${i}-horizontal-share-btn` }
              src={ shareIcon }
            />
          </Button>
          {recep.tags.length > 0 ? recep.tags.map((tag, j) => (
            <h3 key={ j + dez } data-testid={ `${i}-${tag}-horizontal-tag` }>{ tag }</h3>
          )) : <div />}
        </Row>
      )) : <div />}
    </Container>
  );
}

export default DetailHorizontal;
