import React, { useContext } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import './Foods.css';
import Card from '../../components/Card';
import Header from '../../components/Header';
import { FoodCtx } from '../../context/ContextFood';
import Footer from '../../components/Footer';
import { CategoryButtons } from '../../components/Buttons';

function Foods() {
  const STOP_INDEX = 11;
  const { foodApi: { meals } } = useContext(FoodCtx);
  const history = useHistory();
  const onClickAll = ({ target }) => console.log(`Clicou em ${target.value}`);
  const onClickCategory = ({ target }) => console.log(`Clicou em ${target.value}`);
  return (
    <div>
      <Header name="Comidas" icon="true" currentPage="Foods" />
      <CategoryButtons
        label="Foods"
        onClickAll={ onClickAll }
        onClickCategory={ onClickCategory }
      />
      <div className="cards">
        {meals && meals
          .filter((meal, index) => index <= STOP_INDEX)
          .map((item, index) => (
            <Card
              key={ item.idMeal }
              id={ item.idMeal }
              name={ item.strMeal }
              img={ item.strMealThumb }
              index={ index }
              onClick={ () => history.push(item.idMeal) }
            />
          ))}

        { meals && meals.length === 1
          ? <Redirect to={ `/comidas/${meals[0].idMeal}` } /> : '' }
        { meals === null
          // eslint-disable-next-line no-alert
          ? alert('Sinto muito, não encontramos nenhuma receita para esses filtros.')
          : ''}
      </div>
      <div className="spacing" />
      <Footer />
    </div>
  );
}

export default Foods;
