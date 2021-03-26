import React, { useState } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import Header from './Header';
import Detail from './Details/DetailHorizontal';

function ReceitasFeitas() {
  const data = '23/06/2020';
  const [feitas, setFeitas] = useState([
    {
      id: '52771',
      type: 'comida',
      area: 'Italian',
      category: 'Vegetarian',
      alcoholicOrNot: '',
      name: 'Spicy Arrabiata Penne',
      image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
      doneDate: data,
      tags: ['Pasta', 'Curry'],
    },
    {
      id: '178319',
      type: 'bebida',
      area: '',
      category: 'Cocktail',
      alcoholicOrNot: 'Alcoholic',
      name: 'Aquamarine',
      image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
      doneDate: data,
      tags: [],
    },
  ]);
  // setFetias(JSON.parse(localStorage.getItem('doneRecipes')));
  const local = [
    {
      id: '52771',
      type: 'comida',
      area: 'Italian',
      category: 'Vegetarian',
      alcoholicOrNot: '',
      name: 'Spicy Arrabiata Penne',
      image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
      doneDate: data,
      tags: ['Pasta', 'Curry'],
    },
    {
      id: '178319',
      type: 'bebida',
      area: '',
      category: 'Cocktail',
      alcoholicOrNot: 'Alcoholic',
      name: 'Aquamarine',
      image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
      doneDate: data,
      tags: [],
    },
  ];

  const handelClick = (e) => {
    if (e === 'volta') {
      setFeitas(local);
    } else {
      const foods = local.filter((food) => food.type.includes(e));
      setFeitas(foods);
    }
  };

  return (
    <>
      <Header title="Receitas Feitas" searchType="none" />
      <Container>
        <Row style={ { justifyContent: 'space-around' } }>
          <Button
            variant="secondary"
            style={ { margin: '10px 0px', borderRadius: '5px' } }
            onClick={ () => handelClick('volta') }
            data-testid="filter-by-all-btn"
          >
            All
          </Button>
          <Button
            variant="secondary"
            style={ { margin: '10px 0px', borderRadius: '5px' } }
            onClick={ () => handelClick('comida') }
            data-testid="filter-by-food-btn"
          >
            Food
          </Button>
          <Button
            variant="secondary"
            style={ { margin: '10px 0px', borderRadius: '5px' } }
            onClick={ () => handelClick('bebida') }
            data-testid="filter-by-drink-btn"
          >
            Drinks
          </Button>
        </Row>
      </Container>
      <Container fluid style={ { marginBottom: '80px' } }>
        <Row style={ { justifyContent: 'space-around' } }>
          <Detail feitas={ feitas } />
        </Row>
      </Container>
    </>
  );
}

export default ReceitasFeitas;
