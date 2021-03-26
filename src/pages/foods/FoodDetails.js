import React from 'react';
import PropTypes from 'prop-types';

export default function FoodDetails({ foodOrDrinkApi }) {
  return (
    <div>
      {foodOrDrinkApi ? <p>oi</p> : <p>ainda não</p>}
    </div>
  );
}

FoodDetails.propTypes = {
  foodOrDrinkApi: PropTypes.objectOf(PropTypes.array).isRequired,
};
