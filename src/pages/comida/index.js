import React, { useContext }  from 'react';
import Header from '../../components/Header';
import MainFoodContext from '../../context/mainFoodContext';
import requestMealRecipe from '../../services/API';

function Comida() {
  const {
    values: {
      mealThumbnail,
      mealName,
    },
    functions: {
      handleMealThumbnail,
      handleMealName,
    },
  } = useContext(MainFoodContext);

  const requestAPI = async () => {
    const response = await requestMealRecipe(searchInput);
    return setFoods(response);
  };

  return (
    <section>
      <Header>Comidas</Header>
    </section>
  );
}

export default Comida;
