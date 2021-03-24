import React from 'react';
import { useSelector } from 'react-redux';
import ContainerDefault from '../../components/ContainerDefault';
import Loading from '../../components/Loading';

function Drinks() {
  const { isFetching } = useSelector((state) => state.drinks);
  return (
    <ContainerDefault title="Bebidas">
      {
        isFetching ? <Loading />
          : <p>Bebidas</p>
      }
    </ContainerDefault>
  );
}

export default Drinks;
