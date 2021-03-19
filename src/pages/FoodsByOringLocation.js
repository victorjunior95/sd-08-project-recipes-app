import React from 'react';
import './FoodsByOringLocation.css';
import SearchIcon from '../images/searchIcon.svg';
import ProfileIcon from '../images/profileIcon.svg';
import Footer from '../components/Footer';

function FoodsByOringLocation() {
  return (
    <div className="container">
      <div className="header-FoodsByOringLocation">
        <img
          data-testid="profile-top-btn"
          src={ ProfileIcon }
          alt="user-profile"
        />
        <h2 data-testid="page-title">Explorar Origem</h2>
        <img data-testid="search-top-btn" src={ SearchIcon } alt="seach-icon" />
      </div>
      <Footer />
    </div>
  );
}

export default FoodsByOringLocation;
