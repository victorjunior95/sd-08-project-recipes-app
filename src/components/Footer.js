import React, { useContext } from 'react';
import { Button, NavLink } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import ContextRecipes from '../context/ContextRecipes';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  const history = useHistory();
  const { setHeaderInfo } = useContext(ContextRecipes);

  function handleClickDrinkBtn() {
    setHeaderInfo({ pageTitle: 'Bebidas', showSearch: true });
    return history.push('/bebidas');
  }

  function handleClickExploreBtn() {
    setHeaderInfo({ pageTitle: 'Explorar', showSearch: false });
    return history.push('/explorar');
  }

  function handleClickMeatBtn() {
    setHeaderInfo({ pageTitle: 'Comidas', showSearch: true });
    return history.push('/comidas');
  }

  return (
    <section className="footer" data-testid="footer">
      <NavLink
        data-testid="drinks-bottom-btn"
        onClick={ handleClickDrinkBtn }
        src={ drinkIcon }
      >
        <img src={ drinkIcon } alt="drink-icon" />
      </NavLink>

      <Button
        className="buttom"
        type="button"
        data-testid="explore-bottom-btn"
        onClick={ handleClickExploreBtn }
        src={ exploreIcon }
      >
        <img src={ exploreIcon } alt="explore-icon" />
      </Button>

      <NavLink
        data-testid="food-bottom-btn"
        onClick={ handleClickMeatBtn }
        src={ mealIcon }
      >
        <img src={ mealIcon } alt="food icon" />
      </NavLink>
    </section>
  );
}

export default Footer;
