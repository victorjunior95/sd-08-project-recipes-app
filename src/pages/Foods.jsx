import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import SearchButton from '../components/SearchButton';
import Card from '../components/Card';
import Footer from '../components/Footer';

function Foods() {
  const MAX_ARRAY_SIZE = 12;
  const foods = useSelector((state) => state.FilteredRecipes.foods);
  const mapCards = (array) => (
    <section>
      {array.map((food, index) => (
        <Card
          index={ index }
          key={ food.idMeal }
          id={ food.idMeal }
          imagePath={ food.strMealThumb }
          title={ food.strMeal }
          category={ food.strCategory }
        />
      ))}
    </section>
  );
  const showCards = () => {
    if (foods.length === 1) {
      const id = foods[0].idMeal;
      const path = `/comidas/${id}`;
      return <Redirect to={ path } />;
    }
    if (foods.length > MAX_ARRAY_SIZE) {
      const subArray = foods.splice(0, MAX_ARRAY_SIZE);
      return mapCards(subArray);
    }
    return mapCards(foods);
  };
  return (
    <>
      <Header label="Comidas" Search={ SearchButton } page="Comidas" />
      { showCards() }
      <Footer />
    </>
  );
}

export default Foods;
