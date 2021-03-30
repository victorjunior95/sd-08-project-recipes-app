import React from 'react';
import { useSelector } from 'react-redux';

function ProgressDrink() {
  const drink = useSelector((state) => state.recipes.recipes);
  console.log(drink);

  return (
    <div>
      Progress Drink
    </div>
  );
}

export default ProgressDrink;
