import React, { useContext, useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Card from '../../components/Card';
import { DrinkCtx } from '../../context/ContextDrink';
import Footer from '../../components/Footer';
import { CategoryButtons } from '../../components/Buttons';

function Drinks() {
  const STOP_INDEX = 11;
  const { drinkApi: { drinks }, setFilterDrink } = useContext(DrinkCtx);
  const [category, setCategory] = useState('');
  const history = useHistory();
  const onClickAll = ({ target }) => setCategory(target.value);
  const onClickCategory = ({ target }) => (category !== target.value
    ? setCategory(target.value) : setCategory(''));

  useEffect(() => {
    setFilterDrink({ key: 'category', value: category });
  }, [category, setFilterDrink]);

  useEffect(() => {
    const renderingCondition = (categoryState) => {
      if (categoryState === '') {
        setFilterDrink({ key: 'name', value: categoryState });
      }
    }; renderingCondition(category);
  }, [category]);

  return (
    <div>
      <Header name="Bebidas" icon="true" currentPage="Drinks" />
      <CategoryButtons
        label="Drinks"
        onClickAll={ onClickAll }
        onClickCategory={ onClickCategory }
      />
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
              onClick={ () => history.push(`bebidas/${item.idDrink}`) }
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
