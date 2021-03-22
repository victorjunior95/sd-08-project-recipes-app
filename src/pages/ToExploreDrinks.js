import React from 'react';
import './ToExploreDrinks.css';
import Footer from '../components/Footer';
import HeaderSimple from '../components/HeaderSimple';

function ToExploreDrinks() {
  return (
    <div className="container">
      <HeaderSimple />
      <div className="main">
        <button data-testid="explore-by-ingredient" type="button">
          Por Ingredientes
        </button>
        <button data-testid="explore-by-area" type="button">
          Por Local de Origem
        </button>
        <button data-testid="explore-surprise" type="button">
          Me Surpreenda!
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default ToExploreDrinks;
