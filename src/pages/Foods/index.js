import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import ContainerDefault from '../../components/ContainerDefault';
import Loading from '../../components/Loading';

function Foods() {
  const { isFetching, meals } = useSelector((state) => state.foods);
  const oneMeal = meals.length === 1 ? meals[0].idMeal : false;
  return (
    <ContainerDefault title="Comidas">
      {
        isFetching ? <Loading />
          : <p>Comidas</p>
      }
      { oneMeal && <Redirect to={ `/comidas/${oneMeal}` } /> }
    </ContainerDefault>
  );
}

export default Foods;
