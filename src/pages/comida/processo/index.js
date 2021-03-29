import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { requestFoodId } from '../../../services/API';
import FoodContext from '../../../context/comidaContext/FoodContext';
import CardFoodInProgress from '../../../components/Card/CardFoodInProgress';

function ComidaProgresso() {
  const {
    functions: {
      setDetailsFoods,
    },
  } = useContext(FoodContext);

  const { idDaReceita } = useParams();

  useEffect(() => {
    const fetchFood = async () => {
      const request = await requestFoodId(idDaReceita);
      setDetailsFoods(request.meals);
    };
    fetchFood();
  }, [setDetailsFoods, idDaReceita]);

  const favorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const alreadyFavorited = favorites.some((obj) => obj.id === idDaReceita);

  return (
    <section>
      <CardFoodInProgress alreadyFavorited={ alreadyFavorited } />
    </section>
  );
}

export default ComidaProgresso;
