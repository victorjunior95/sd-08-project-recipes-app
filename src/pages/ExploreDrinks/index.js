import React from 'react';
import { Button, NavbarBrand } from 'react-bootstrap';
import ContainerDefault from '../../components/ContainerDefault';

// import { Container } from './styles';

function ExploreDrinks() {
  return (
    <ContainerDefault title="Explorar Bebidas">
      <NavbarBrand href="/explorar/bebidas/ingredientes" className="mx-0">
        <Button
          type="button"
          className="mb-3"
          data-testid="explore-by-ingredient"
          size="block"
        >
          Por Ingredientes
        </Button>
      </NavbarBrand>
      <NavbarBrand href="/" className="mx-0">
        <Button
          type="button"
          className="mb-3"
          data-testid="explore-surprise"
          size="block"
        >
          Me Surpreenda!
        </Button>
      </NavbarBrand>
    </ContainerDefault>
  );
}

export default ExploreDrinks;
