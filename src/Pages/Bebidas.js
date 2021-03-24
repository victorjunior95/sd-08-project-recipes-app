import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import { fetchItem } from '../store/apiSlice';
import { fetchCategories } from '../store/apiCategoriesSlice';
import CardItens from './Card';

const FETCH_ALL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

function Bebidas() {
// <<<<<<< main-group-20-Req-25-ao-32
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'));
    dispatch(fetchItem(FETCH_ALL));
  }, [dispatch]);
  const loadingAPI = useSelector((state) => state.api.loading);
  const loadingCategoriesAPI = useSelector((state) => state.categoriesButton.loading);
  const drinksArray = useSelector((state) => state.api.data.drinks);
  console.log(drinksArray);
  const drinkCategories = useSelector((state) => (
    state.categoriesButton.categories.drinks
  ));
  const [value, setValue] = useState('5');
  const history = useHistory();
  const isSearching = useSelector((state) => state.search.isSearching);

  if (loadingAPI === 'fulfilled' && loadingCategoriesAPI === 'fulfilled') {
    if (drinksArray.length === 1 && isSearching === true) {
      history.push(`/bebidas/${drinksArray[0].idDrink}`);
    }
    const drinksNew = [...drinksArray];
    drinksNew.length = 12;
    const drinksCategoriesNew = [...drinkCategories];
    drinksCategoriesNew.length = 5;
    return (
      <>
        <Header title="Bebidas" />
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
                    dispatch(fetchItem(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categories.strCategory}`));
                    setValue(e.target.value);
                  } else if (e.target.value === value) {
                    dispatch(fetchItem(FETCH_ALL));
                    setValue('5');
                  }
                } }
              >
                {categories.strCategory}
              </Button>
            )) }
            <Button
              variant="secondary"
              style={ { margin: '10px 0px', borderRadius: '5px' } }
              onClick={ () => dispatch(fetchItem(FETCH_ALL)) }
              data-testid="All-category-filter"
            >
              All
            </Button>
          </Row>
        </Container>
        <Container fluid style={ { marginBottom: '80px' } }>
          <Row style={ { justifyContent: 'space-around' } }>
            { drinksNew
              .map((drink, index) => (
                <CardItens
                  key={ index }
                  index={ index }
                  name={ drink.strDrink }
                  image={ drink.strDrinkThumb }
                  id={ drink.idDrink }
                  drink="true"
                />
              )) }
          </Row>
        </Container>
        <Footer />
      </>
    );
  }
// =======
//   const estado = useSelector((state) => state.api);
//   const history = useHistory();

//   useEffect(() => {
//     if (estado.data === 'SN') {
//       console.log('Sem filtros');
//     } else if (estado.data.drinks.length === 1) {
//       history.push(`/bebidas/${estado.data.drinks[0].idDrink}`);
//     } else if (estado.data.drinks.length > 1) {
//       console.log('fazer map');
//     }
//   }, [estado, history]);

// >>>>>>> main-group-20
  return (
    <>
      <Header title="Comidas" />
      <h2>Carregando...</h2>
      <Footer />
    </>
  );
}

export default Bebidas;
