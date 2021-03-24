import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import SearchButton from '../components/SearchButton';
import Card from '../components/Card';
import Footer from '../components/Footer';
import { actionThunkMainFoods } from '../redux/actions';

function Foods() {
  const MAX_ARRAY_SIZE = 12;
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.Loading.isLoading);
  const foods = useSelector((state) => state.FilteredRecipes.foods);
  const mainFoods = useSelector((state) => state.MainRecipes.mainFoods);
  const requestMainFoods = () => {
    dispatch(actionThunkMainFoods());
  };

  useEffect(() => {
    requestMainFoods();
  }, []);

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

  console.log('entrou...', isLoading);

  const showCards = () => {
    let foodsToMap = [];
    if (foods.length === 0) {
      foodsToMap = [...mainFoods];
    } else {
      foodsToMap = [...foods];
    }
    if (foodsToMap.length === 1) {
      const id = foodsToMap[0].idMeal;
      const path = `/comidas/${id}`;
      return <Redirect to={ path } />;
    }
    if (foodsToMap.length > MAX_ARRAY_SIZE) {
      const subArray = foodsToMap.splice(0, MAX_ARRAY_SIZE);
      return mapCards(subArray);
    }
    return mapCards(foodsToMap);
  };
  return (
    <div>
      {isLoading ? (
        <h1>LOADING...</h1>
      ) : (
        <>
          <Header label="Comidas" Search={ SearchButton } page="Comidas" />
          {showCards()}
          <Footer />
        </>
      )}
    </div>
  );
}

export default Foods;
