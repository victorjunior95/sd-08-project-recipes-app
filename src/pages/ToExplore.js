import React from 'react';
import './ToExplore.css';
import Footer from '../components/Footer';
import HeaderSimple from '../components/HeaderSimple';

function ToExplore() {
  return (
    <div className="container">
      <HeaderSimple />
      <div className="main">
        <button data-testid="explore-food" type="button">
          Explorar Comidas
        </button>
        <button data-testid="explore-drinks" type="button">
          Explorar bebidas
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default ToExplore;
