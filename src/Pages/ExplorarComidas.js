import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItem } from '../store/apiSlice';
import { buttonSurprise } from '../store/surpriseSlice';
import Header from './Header';
import Footer from './Footer';

function ExplorarComidas() {
  const history = useHistory();
  const dispatch = useDispatch();
  const surprise = useSelector((state) => state.surprise.surpriseRedirect);
  const loadingAPI = useSelector((state) => state.api.loading);
  const data = useSelector((state) => state.api.data.meals);

  const surpriseButton = () => {
    dispatch(fetchItem('https://www.themealdb.com/api/json/v1/1/random.php'));
    dispatch(buttonSurprise());
  };

  if (loadingAPI === 'fulfilled' && surprise) {
    dispatch(buttonSurprise());
    history.push(`/comidas/${data[0].idMeal}`);
  }

  return (
    <>
      <Header title="Explorar Comidas" searchType="none" />
      <Container>
        <Row>
          <Col xl="8">
            <Button
              data-testid="explore-by-ingredient"
              onClick={ () => history.push('/explorar/comidas/ingredientes') }
            >
              Por Ingredientes
            </Button>
          </Col>
          <Col xl="8">
            <Button
              data-testid="explore-by-area"
              onClick={ () => history.push('/explorar/comidas/area') }
            >
              Por Local de Origem
            </Button>
          </Col>
          <Col xl="8">
            <Button
              data-testid="explore-surprise"
              onClick={ () => surpriseButton() }
            >
              Me Surpreenda!
            </Button>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default ExplorarComidas;
