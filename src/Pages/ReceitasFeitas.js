import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import Header from './Header';
import Detail from './Details/DetailHorizontal';

function ReceitasFeitas() {
  return (
    <>
      <Header title="Receitas Feitas" searchType="none" />
      <Container>
        <Row style={ { justifyContent: 'space-around' } }>
          <Button
            variant="secondary"
            style={ { margin: '10px 0px', borderRadius: '5px' } }
            // onClick={ () => dispatch(fetchItem(FETCH_ALL)) }
            data-testid="filter-by-all-btn"
          >
            All
          </Button>
          <Button
            variant="secondary"
            style={ { margin: '10px 0px', borderRadius: '5px' } }
            data-testid="filter-by-food-btn"
          >
            Food
          </Button>
          <Button
            variant="secondary"
            style={ { margin: '10px 0px', borderRadius: '5px' } }
            data-testid="filter-by-drink-btn"
          >
            Drinks
          </Button>
        </Row>
      </Container>
      <Container fluid style={ { marginBottom: '80px' } }>
        <Row style={ { justifyContent: 'space-around' } }>
          <Detail />
        </Row>
      </Container>
    </>
  );
}

export default ReceitasFeitas;
