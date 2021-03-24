import React from 'react';
import { useHistory } from 'react-router-dom';

function DrinkRecipeDetails() {
  const history = useHistory();
  const pathname = history.location;
  return (
    <div>
      { pathname }
    </div>
  );
}

export default DrinkRecipeDetails;
