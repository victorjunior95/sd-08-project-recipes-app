import React from 'react';
import ProfileIcon from '../images/profileIcon.svg';
import './ToExplore.css';
import Footer from '../components/Footer';

function ToExplore() {
  return (
    <div className="container">
      <div className="header-explore">
        <img
          data-testid="profile-top-btn"
          src={ ProfileIcon }
          alt="user-profile"
        />
        <h2 data-testid="page-title">Explorar</h2>
      </div>
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
