import React from 'react';

function Footer() {
  return (
    <div data-testid="footer">
      <button type="button" data-testid="drinks-bottom-btn">
        Drinks
      </button>
      <button type="button" data-testid="explore-bottom-btn">
        Explorar
      </button>
      <button type="button" data-testid="food-bottom-btn">
        Comidas
      </button>
    </div>
  );
}

export default Footer;
