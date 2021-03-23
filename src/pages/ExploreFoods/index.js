import React from 'react';
import { Button, NavbarBrand } from 'react-bootstrap';
import ContainerDefault from '../../components/ContainerDefault';

// import { Container } from './styles';

function ExploreFoods() {
  return (
    <ContainerDefault title="Explorar Comidas">
      <NavbarBrand href="/explorar/comidas/ingredientes" className="mx-0">
        <Button
          type="button"
          className="mb-3"
          data-testid="explore-by-ingredient"
          size="block"
        >
          Por Ingredientes
        </Button>
      </NavbarBrand>
      <NavbarBrand href="/explorar/comidas/area" className="mx-0">
        <Button
          type="button"
          className="mb-3"
          data-testid="explore-by-area"
          size="block"
        >
          Por Local de Origem
        </Button>
      </NavbarBrand>
      <NavbarBrand href="/explorar/comidas/area" className="mx-0">
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

export default ExploreFoods;
