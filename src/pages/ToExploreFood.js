import React from 'react';
import ProfileIcon from '../images/profileIcon.svg';
import './ToExploreFood.css';
import Footer from '../components/Footer';

function ToExploreFood() {
  return (
    <div className="container">
      <div className="header-explore-food">
        <img
          data-testid="profile-top-btn"
          src={ ProfileIcon }
          alt="user-profile"
        />
        <h2 data-testid="page-title">Explorar Comidas</h2>
      </div>
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

export default ToExploreFood;
