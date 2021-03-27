import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Foods.css';
import PropTypes from 'prop-types';
import Card from '../../components/Card';
import Header from '../../components/Header';
import { FoodCtx } from '../../context/ContextFood';
import Footer from '../../components/Footer';
import { CategoryButtons } from '../../components/Buttons';

function Foods({ location: { state } }) {
  const STOP_INDEX = 11;
  const { foodApi: { meals }, setFilterFood } = useContext(FoodCtx);
  const [category, setCategory] = useState('');
  const history = useHistory();
  const onClickAll = ({ target }) => setCategory(target.value);
  const onClickCategory = ({ target }) => (category !== target.value
    ? setCategory(target.value) : setCategory(''));

  useEffect(() => {
    setFilterFood({ key: 'category', value: category });
  }, [category, setFilterFood]);

  useEffect(() => {
    const categorySetting = (categoryState) => {
      if (categoryState === '') {
        setFilterFood({ key: 'name', value: categoryState });
      }
    }; categorySetting(category);
  }, [category, setFilterFood]);

  const renderFromIngredients = () => (
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
              onClick={ () => history.push(`comidas/${item.idMeal}`) }
            />
          ))}
        {console.log('Este é o meals', meals && meals.filter((element, index) => (element[`strIngredient${Number}`] === 'Potatoes')))}

        { (meals && meals.length === 1 && category === '')
          ? history.push(`/comidas/${meals[0].idMeal}`)
          : '' }
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

  const renderFromCategory = () => (
    <div>
      <Header name="Comidas" icon="true" currentPage="Foods" />
      <CategoryButtons
        label="Foods"
        onClickAll={ onClickAll }
        onClickCategory={ onClickCategory }
      />
      <div className="cards">
        {console.log('Do Foods', state)}
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

        { (meals && meals.length === 1 && category === '')
          ? history.push(`/comidas/${meals[0].idMeal}`)
          : '' }
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

  return (
    renderFromIngredients());
}

Foods.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
    search: PropTypes.string,
    hash: PropTypes.string,
    state: PropTypes.shape({
      fromExplorerFoodsIngredients: PropTypes.bool,
      ingredient: PropTypes.string,
    }),
    key: PropTypes.string,
  }),
};

Foods.defaultProps = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
    search: PropTypes.string,
    hash: PropTypes.string,
    state: PropTypes.string,
    key: PropTypes.string,
  }),
};

export default Foods;
