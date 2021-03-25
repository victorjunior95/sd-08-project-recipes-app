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
    try {
      const req = await fetch(url);
      const result = await req.json();
      if (result.meals === null || result.drinks === null) {
        dispatch(isLoading());
        return alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
      }
      dispatch(ingredientResult(result));
      dispatch(isLoading());
    } catch (e) {
      alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    }
  };
}
