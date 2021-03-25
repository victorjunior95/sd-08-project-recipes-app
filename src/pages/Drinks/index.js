import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import ContainerDefault from '../../components/ContainerDefault';
import Loading from '../../components/Loading';
import CardsArea from '../../components/CardsArea';

function Drinks() {
  const { isFetching, drinks } = useSelector((state) => state.drinks);
  const oneDrink = drinks ? drinks.length : false;
  return (
    <ContainerDefault title="Bebidas">
      {
        isFetching ? <Loading />
          : <CardsArea type="drinks" />
      }
      { oneDrink === 1 && <Redirect to={ `/bebidas/${drinks[0].idDrink}` } /> }
    </ContainerDefault>
  );
}

export default Drinks;
