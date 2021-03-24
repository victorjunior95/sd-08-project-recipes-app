import React from 'react';
import { useSelector } from 'react-redux';
import ContainerDefault from '../../components/ContainerDefault';
import Loading from '../../components/Loading';

function Foods() {
  const { isFetching } = useSelector((state) => state.foods);
  if (isFetching) return <Loading />;
  return (
    <ContainerDefault title="Comidas">
      <p>testando</p>
    </ContainerDefault>
  );
}

export default Foods;
