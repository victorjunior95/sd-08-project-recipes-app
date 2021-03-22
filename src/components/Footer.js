import React from 'react';

function Footer() {
  return (
    <div data-testid="footer" className="footer">
      <img
        src="/src/images/drinkIcon.svg"
        data-testid="drinks-bottom-btn"
        alt="icone drinks"
      />
      <img
        src="/src/images/exploreIcon.svg"
        data-testid="explore-bottom-btn"
        alt="icone explore"
      />
      <img
        src="/src/images/mealIcon.svg"
        data-testid="food-bottom-btn"
        alt="icone food"
      />
    </div>
  );
}

export default Footer;
