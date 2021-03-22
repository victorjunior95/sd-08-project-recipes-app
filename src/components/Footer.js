import React from 'react';
import { useHistory } from 'react-router-dom';

function Footer() {
  const history = useHistory();

  return (
    <div data-testid="footer" className="footer">
      <button type="button" onClick={ () => history.push('/bebidas') }>
        <img
          src="../images/drinkIcon.svg"
          data-testid="drinks-bottom-btn"
          alt="icone drinks"
        />
      </button>
      <button type="button" onClick={ () => history.push('/explorar') }>
        <img
          src="../images/exploreIcon.svg"
          data-testid="explore-bottom-btn"
          alt="icone explore"
        />
      </button>
      <button type="button" onClick={ () => history.push('/comidas') }>
        <img
          src="../images/mealIcon.svg"
          data-testid="food-bottom-btn"
          alt="icone food"
        />
      </button>
    </div>
  );
}

export default Footer;
