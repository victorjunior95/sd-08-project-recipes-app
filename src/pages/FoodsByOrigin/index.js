import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContainerDefault from '../../components/ContainerDefault';
import CardsArea from '../../components/CardsArea';
import Loading from '../../components/Loading';
import { foodsOnMount } from '../../redux/actions';
import DropdownAreas from '../../components/DropdownAreas';

// import { Container } from './styles';

function FoodsByOrigin() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(foodsOnMount());
  }, [dispatch]);

  const { isFetching, areas } = useSelector((state) => state.foods);
  const MIN_AREAS = 2;
  return (
    <ContainerDefault title="Explorar Origem">
      {
        isFetching && areas.length < MIN_AREAS ? <Loading />
          : (
            <>
              <DropdownAreas />
              <CardsArea type="foods" />
            </>
          )
      }
    </ContainerDefault>
  );
}
export default FoodsByOrigin;
