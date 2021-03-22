import React, { useContext } from 'react';
import PropTypes from 'prop-types';

function CardFood({ context }) {
  const {
    values: {
      foods,
      drinks,
    },
  } = useContext(context);

  const foodOrDrink = (foods === undefined)
    ? drinks
    : foods;

  return (
    <>
      {foodOrDrink.map(({}))}
    </>
  );
}

CardFood.propTypes = {
  context: PropTypes.node.isRequired,
};

export default CardFood;
