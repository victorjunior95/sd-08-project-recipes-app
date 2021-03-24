import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import ContainerDefault from '../../components/ContainerDefault';
import Loading from '../../components/Loading';
import CardsArea from '../../components/CardsArea';

function Drinks() {
  const { isFetching, drinks } = useSelector((state) => state.drinks);
  const oneDrink = drinks.length === 1 ? drinks[0].idDrink : false;
  return (
    <ContainerDefault title="Bebidas">
      {
        isFetching ? <Loading />
          : <CardsArea type="drinks" />
      }
      { oneDrink && <Redirect to={ `/bebidas/${oneDrink}` } /> }
    </ContainerDefault>
  );
}

export default Drinks;
