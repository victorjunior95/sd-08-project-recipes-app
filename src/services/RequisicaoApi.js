export async function fetchRecipes(endpoint, searchType, radioValue, inputText) {
  const url = `https://www.${endpoint}.com/api/json/v1/1/${searchType}.php?${radioValue}=${inputText}`;
  try {
    const requestReturn = await fetch(url);
    const requestObject = await requestReturn.json();
    return requestObject;
  } catch (error) {
    return { recipe: null };
  }
}

export async function fetchRecipeDetails(endpoint, recipeId) {
  const url = `https://www.${endpoint}.com/api/json/v1/1/lookup.php?i=${recipeId}`;
  try {
    const requestReturn = await fetch(url);
    const requestObject = await requestReturn.json();
    return requestObject;
  } catch (error) {
    return { recipe: null };
  }
}
