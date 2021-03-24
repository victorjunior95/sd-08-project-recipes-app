import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Button, ToggleButtonGroup } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';

import { fetchItem } from '../store/apiSlice';
import { fetchCategories } from '../store/apiCategoriesSlice';
import CardItens from './Card';

function Comidas() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories('https://www.themealdb.com/api/json/v1/1/list.php?c=list'));
    dispatch(fetchItem('https://www.themealdb.com/api/json/v1/1/search.php?s='));
  }, [dispatch]);
  const loadingAPI = useSelector((state) => state.api.loading);
  const loadingCategoriesAPI = useSelector((state) => state.categoriesButton.loading);
  const foodsArray = useSelector((state) => state.api.data.meals);
  const foodCategories = useSelector((state) => state.categoriesButton.categories.meals);
  const [value, setValue] = useState('5');

  if (loadingAPI === 'fulfilled' && loadingCategoriesAPI === 'fulfilled') {
    const foodsNew = [...foodsArray];
    foodsNew.length = 12;
    const foodCategoriesNew = [...foodCategories];
    foodCategoriesNew.splice(5, 9);
    return (
      <>
        <Header title="Comidas" />
        <h2>Comidas</h2>
        <Container fluid>
          <Row style={ { justifyContent: 'space-around' } }>
            { foodCategoriesNew.map((categories, index) => (
              <Button
                style={ { margin: '10px 0px', borderRadius: '5px' } }
                key={ index }
                variant="secondary"
                value={ index }
                data-testid={ `${categories.strCategory}-category-filter` }
                onClick={ (e) => {
                  if (e.target.value !== value) {
                    console.log('value diferente');
                    dispatch(fetchItem(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categories.strCategory}`));
                    setValue(e.target.value);
                    console.log(e.target.checked);
                  } else if (e.target.value === value) {
                    console.log('Value iguais');
                    dispatch(fetchItem('https://www.themealdb.com/api/json/v1/1/search.php?s='));
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
              onClick={ () => dispatch(fetchItem('https://www.themealdb.com/api/json/v1/1/search.php?s=')) }
              data-testid="All-category-filter"
            >
              All
            </Button>
          </Row>
        </Container>
        <Container fluid style={ { marginBottom: '80px' } }>
          <Row style={ { justifyContent: 'space-around' } }>
            { foodsNew
              .map((food, index) => (
                <CardItens
                  key={ index }
                  index={ index }
                  name={ food.strMeal }
                  image={ food.strMealThumb }
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

export default Comidas;
