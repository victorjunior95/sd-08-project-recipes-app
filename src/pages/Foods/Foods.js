import React, { useContext, useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import './Foods.css';
import Card from '../../components/Card';
import Header from '../../components/Header';
import { FoodCtx } from '../../context/ContextFood';
import Footer from '../../components/Footer';
import { CategoryButtons } from '../../components/Buttons';

function Foods() {
  const STOP_INDEX = 11;
  const { foodApi: { meals }, setFilterFood } = useContext(FoodCtx);
  const [category, setCategory] = useState('');
  const history = useHistory();
  const onClickAll = ({ target }) => setCategory(target.value);
  const onClickCategory = ({ target }) => setCategory(target.value);

  useEffect(() => {
    setFilterFood({ key: 'category', value: category });
  }, [category, setFilterFood]);
  // const renderingCondition = (categoryState) => {
  //   const exist = (meals && meals
  //     .filter((meal, index) => index <= STOP_INDEX));
  //   const result = exist || [];
  //   console.log(result);
  //   if (categoryState !== '') {
  //     result = (meals && meals
  //       .filter((meal, index) => index <= STOP_INDEX));
  //     .map((item, index) => (
  //       <Card
  //         key={ item.idMeal }
  //         id={ item.idMeal }
  //         name={ item.strMeal }
  //         img={ item.strMealThumb }
  //         index={ index }
  //         onClick={ () => history.push(`comidas/${item.idMeal}`) }
  //       />));
  //   }
  //   return result.map((item, index) => (
  //     <Card
  //       key={ item.idMeal }
  //       id={ item.idMeal }
  //       name={ item.strMeal }
  //       img={ item.strMealThumb }
  //       index={ index }
  //       onClick={ () => history.push(`comidas/${item.idMeal}`) }
  //     />));
  // };

  return (
    <div>
      <Header name="Comidas" icon="true" currentPage="Foods" />
      <CategoryButtons
        label="Foods"
        onClickAll={ onClickAll }
        onClickCategory={ onClickCategory }
      />
      <div className="cards">
        {/* {(renderingCondition(category))} */}
        {meals && meals
          .filter((meal, index) => index <= STOP_INDEX)
          .map((item, index) => (
            <Card
              key={ item.idMeal }
              id={ item.idMeal }
              name={ item.strMeal }
              img={ item.strMealThumb }
              index={ index }
              onClick={ () => history.push(`comidas/${item.idMeal}`) }
            />
          ))}

        { meals && meals.length === 1
          ? <Redirect to={ `/comidas/${meals[0].idMeal}` } /> : '' }
        { meals === null
          // eslint-disable-next-line no-alert
          ? alert('Sinto muito, não encontramos nenhuma receita para esses filtros.')
          : ''}
        {console.log(meals)}
      </div>
      <div className="spacing" />
      <Footer />
    </div>
  );
}

export default Foods;
