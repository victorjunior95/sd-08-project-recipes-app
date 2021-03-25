export const SEARCH_BY_INGREDIENT = 'SEARCH_BY_INGREDIENT';

export const ingredientResult = (ingredient) => ({
  type: SEARCH_BY_INGREDIENT,
  payload: {
    ingredient,
  },
});

export const isLoading = () => ({
  type: 'IS_FETCHING',
});

export function fetchIngredient(url) {
  return async (dispatch) => {
    dispatch(isLoading());
    const result = await fetch(url).then((response) => response.json());
    console.log(result);
    if (result.meals === null || result.length === 0) {
      dispatch(isLoading());
      return alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    }
    try {
      dispatch(ingredientResult(result));
      dispatch(isLoading());
    } catch (e) {
      return console.log('sdasd');
    }
  };
}
