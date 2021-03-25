import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { foodsOnMount } from '../../redux/actions';
import CardsArea from '../../components/CardsArea';
import ContainerDefault from '../../components/ContainerDefault';
import Loading from '../../components/Loading';

function Foods() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(foodsOnMount());
  }, [dispatch]);

  const { isFetching, meals } = useSelector((state) => state.foods);
  const oneMeal = meals ? meals.length : false;
  return (
    <ContainerDefault title="Comidas">
      {
        isFetching ? <Loading />
          : <CardsArea type="foods" />
      }
      { oneMeal === 1 && <Redirect to={ `/comidas/${meals[0].idMeal}` } /> }
    </ContainerDefault>
  );
}

export default Foods;
