import React from 'react';
import { useSelector } from 'react-redux';
import ContainerDefault from '../../components/ContainerDefault';
import Loading from '../../components/Loading';

function Foods() {
  const { isFetching } = useSelector((state) => state.foods);
  return (
    <ContainerDefault title="Comidas">
      {
        isFetching ? <Loading />
          : <p>Comidas</p>
      }
    </ContainerDefault>
  );
}

export default Foods;
