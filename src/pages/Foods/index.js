import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import CardsArea from '../../components/CardsArea';
import ContainerDefault from '../../components/ContainerDefault';
import Loading from '../../components/Loading';

function Foods() {
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
