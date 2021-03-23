import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { LoginAndFoodContext } from '../context/ContextFood';
import { getMealRecipesDetails } from '../services/getAPIs';
import './DetailsMeal.css';

function DetailsMeal() {
  const dataContext = useContext(LoginAndFoodContext);
  const { meals } = dataContext;
  const Params = useParams();
  const [mealDetail, setMealDetail] = useState([{}]);
  useEffect(() => {
    const result = meals.filter((meal) => meal.idMeal === Params.id);
    const getIdMeal = result.map((item) => item.idMeal);
    async function fetchDetailsRecipe() {
      const getDetailsRecipe = await getMealRecipesDetails(getIdMeal);
      setMealDetail(getDetailsRecipe);
    }
    fetchDetailsRecipe();
  }, [meals, Params.id]);

  // const teste = Object.keys(mealDetail[0];

  // console.log(teste.filter(item => item.includes('strIngredient')))
  console.log(
    Object.keys(mealDetail).forEach((element) => {
      element.includes('strIngredient');
    }),
  );

  return (
    <div>
      <div className="container-card-meal-details">
        {/* {mealDetail.map((meal) => ( */}
        {/* <div className="card-meal-details" key={meal.idMeal}> */}
        {/* <img src={meal.strMealThumb} alt="thumbnails-meal" /> */}
        {/* <h2>{meal.strMeal}</h2> */}
        {/* </div> */}
        {/* ))} */}
      </div>
    </div>
  );
}

export default DetailsMeal;
