import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../../components/Header';
import Card from '../../components/Card';
import { DrinkCtx } from '../../context/ContextDrink';
import Footer from '../../components/Footer';
import { CategoryButtons } from '../../components/Buttons';

function Drinks() {
  const STOP_INDEX = 11;
  const { drinkApi: { drinks } } = useContext(DrinkCtx);
  console.log(drinks);
  return (
    <div>
      <Header name="Bebidas" icon="true" currentPage="Drinks" />
      <CategoryButtons label="Drinks" />
      <div className="cards">
        {drinks && drinks
          .filter((drink, index) => index <= STOP_INDEX)
          .map((item, index) => (
            <Card
              key={ item.idDrink }
              id={ item.idDrink }
              name={ item.strDrink }
              img={ item.strDrinkThumb }
              index={ index }
            />
          ))}
        { drinks && drinks.length === 1
          ? <Redirect to={ `/bebidas/${drinks[0].idDrink}` } /> : '' }
        { drinks === null
          // eslint-disable-next-line no-alert
          ? alert('Sinto muito, não encontramos nenhuma receita para esses filtros.')
          : ''}
      </div>
      <div className="spacing" />
      <Footer />
    </div>
  );
}

export default Drinks;
