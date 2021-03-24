import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useIsMeal } from '../../services/customHooks';
import { fetchDetails, fetchDrinks, fetchMeal } from '../../services/API';
import { saveActualRecipe, saveRecommendations } from '../../redux/actions/details';

async function getRecipe(dispatch, id, isMeal) {
  let api = '';
  let recommendations = '';
  if (isMeal) {
    api = 'meal';
    recommendations = await fetchDrinks(null, 'firstFetch');
  } else {
    api = 'beverage';
    recommendations = await fetchMeal(null, 'firstFetch');
  }
  dispatch(saveRecommendations(recommendations));
  const actualRecipe = await fetchDetails(id, api);
  dispatch(saveActualRecipe(actualRecipe));
}

function Details() {
  const { recipe } = useSelector((state) => state.detailsReducer);
  const isMeal = useIsMeal();
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    getRecipe(dispatch, id, isMeal);
  }, []);
  return (
    <main className="recipe-details">
      Teste
    </main>
  );
}

export default Details;
