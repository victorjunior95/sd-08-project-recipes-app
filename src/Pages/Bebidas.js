import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Button, ToggleButton, ButtonGroup, ToggleButtonGroup } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';

import { fetchItem } from '../store/apiSlice';
import { fetchCategories } from '../store/apiCategoriesSlice';
import CardItens from './Card';

function Bebidas() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'));
    dispatch(fetchItem('https://www.thecocktaildb.com/api/json/v1/1/search.php?s='));
  }, [dispatch]);
  const loadingAPI = useSelector((state) => state.api.loading);
  const loadingCategoriesAPI = useSelector((state) => state.categoriesButton.loading);
  const drinksArray = useSelector((state) => state.api.data.drinks);
  const drinkCategories = useSelector((state) => state.categoriesButton.categories.drinks);
  const [value, setValue] = useState('5');

  if (loadingAPI === 'fulfilled' && loadingCategoriesAPI === 'fulfilled') {
    const drinksNew = [...drinksArray];
    drinksNew.length = 12;
    const drinksCategoriesNew = [...drinkCategories];
    drinksCategoriesNew.splice(5, 6);
    return (
      <>
        <Header title="Comidas" />
        <h2>Bebidas</h2>
        <Container fluid>
          <Row style={ { justifyContent: 'space-around' } }>
            { drinksCategoriesNew.map((categories, index) => (
              <Button
                style={ { margin: '10px 0px', borderRadius: '5px' } }
                key={ index }
                variant="secondary"
                value={ index }
                data-testid={ `${categories.strCategory}-category-filter` }
                onClick={ (e) => {
                  if (e.target.value !== value) {
                    console.log('value diferente');
                    dispatch(fetchItem(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categories.strCategory}`));
                    setValue(e.target.value);
                    console.log(e.target.checked);
                  } else if (e.target.value === value) {
                    console.log('Value iguais');
                    dispatch(fetchItem('https://www.thecocktaildb.com/api/json/v1/1/search.php?s='));
                    console.log(e.target.checked);
                  }
                } }
              >
                {categories.strCategory}
              </Button>
            )) }
            <Button
              variant="secondary"
              style={ { margin: '10px 0px', borderRadius: '5px' } }
              onClick={ () => dispatch(fetchItem('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')) }
              data-testid="All-category-filter"
            >
              All
            </Button>
          </Row>
        </Container>
        <Container fluid style={ { marginBottom: '80px' } }>
          <Row style={ { justifyContent: 'space-around' } }>
            { drinksNew
              .map((food, index) => (
                <CardItens
                  key={ index }
                  index={ index }
                  name={ food.strDrink }
                  image={ food.strDrinkThumb }
                />
              )) }
          </Row>
        </Container>
        <Footer />
      </>
    );
  }
  return (
    <>
      <Header title="Comidas" />
      <h2>Carregando...</h2>
      <Footer />
    </>
  );
}

export default Bebidas;
// dispatch(fetchItem(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categories.strCategory}`))