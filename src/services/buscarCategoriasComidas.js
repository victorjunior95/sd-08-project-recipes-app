async function buscarCategoriaComida() {
  const endpoint = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  const resultado = await fetch(endpoint);
  const cinco = 5;
  const resultadoJson = await resultado.json();
  return resultadoJson.meals.slice(0, cinco);
}

export default buscarCategoriaComida;
