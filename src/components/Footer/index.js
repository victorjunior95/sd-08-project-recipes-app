import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import drinkIcon from '../../images/drinkIcon.svg';
import exploreIcon from '../../images/exploreIcon.svg';
import mealIcon from '../../images/mealIcon.svg';
import './style.css';

function Footer() {
  return (
    <Container as="footer" className="footer bg-warning" data-testid="footer" fluid>
      <Navbar className="justify-content-around align-items-center">
        <Navbar.Brand href="/bebidas">
          <img src={ drinkIcon } alt="Ir para bebidas" data-testid="drinks-bottom-btn" />
        </Navbar.Brand>
        <Navbar.Brand href="/explorar">
          <img
            src={ exploreIcon }
            alt="Link para exploração"
            data-testid="explore-bottom-btn"
          />
        </Navbar.Brand>
        <Navbar.Brand href="/comidas">
          <img
            src={ mealIcon }
            alt="Link para comidas"
            data-testid="food-bottom-btn"
          />
        </Navbar.Brand>
      </Navbar>
    </Container>
  );
}

export default Footer;
