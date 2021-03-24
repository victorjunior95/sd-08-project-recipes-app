import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../context/Context';

function Footer() {
  const history = useHistory();
  const { setInputValue, setSearchParams } = useContext(Context);

  return (
    <div data-testid="footer" className="footer">
      <button
        type="button"
        onClick={ () => {
          setInputValue('');
          setSearchParams('');
          history.push('/bebidas');
        } }
      >
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
      <button
        type="button"
        onClick={ () => {
          setInputValue('');
          setSearchParams('');
          history.push('/comidas');
        } }
      >
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
