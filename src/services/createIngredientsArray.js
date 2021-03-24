function createIngredientsArray(obj) {
  const IngredientsArray = [];
  const TOTAL_NUMBER_OF_INGREDIENTS = 20;
  for (let i = 1; i <= TOTAL_NUMBER_OF_INGREDIENTS; i += 1) {
    const ingr = `strIngredient${i}`;
    const meas = `strMeasure${i}`;
    if (obj[0][ingr]) {
      IngredientsArray.push(`${obj[0][ingr]} - ${obj[0][meas]}`);
    }
  }
  return IngredientsArray;
}

export default createIngredientsArray;
