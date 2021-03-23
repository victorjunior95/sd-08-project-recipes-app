import React from 'react';
import DrinksButton from './DrinksButton';
import ExploreButton from './ExploreButton';
import FoodButton from './FoodButton';
import '../styles/footer.css';

function Footer() {
  return (
    <footer className="footer" data-testid="footer">
      <DrinksButton />
      <ExploreButton />
      <FoodButton />
    </footer>
  );
}

export default Footer;
