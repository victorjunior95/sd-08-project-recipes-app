import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { requestDrinkRecipe, requestFoodId } from '../../../services/API';
import FoodContext from '../../../context/comidaContext/FoodContext';
import CardFoodDetails from '../../../components/Cards/CardFoodDetails';
import './index.css';

function ComidaDetalhes() {
  const {
    functions: {
      setDetailsFoods,
      setRecomendations,
    },
  } = useContext(FoodContext);

  const { idDaReceita } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFood = async () => {
      const request = await requestFoodId(idDaReceita);
      setDetailsFoods(request.meals);
      setLoading(false);
    };
    fetchFood();
  }, [setDetailsFoods, idDaReceita]);

  useEffect(() => {
    const fetchDrinks = async () => {
      const request = await requestDrinkRecipe();
      setRecomendations(request.drinks);
      setLoading(false);
    };
    fetchDrinks();
  }, [setRecomendations]);

  return (
    <section>
      {/* {!loading && <h2>Loading...</h2>} */}
      {!loading && <CardFoodDetails />}
    </section>
  );
}

export default ComidaDetalhes;
