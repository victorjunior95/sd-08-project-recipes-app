const requestApi = async (url, searchFilter, inputSearch) => {
  let endPoint;
  let tamanhoResposta;
  let terminatedRequest;

  if (searchFilter === 'ingredientes') {
    endPoint = `https://www.${url.name}.com/api/json/v1/1/filter.php?i=${inputSearch}`;
  } else if (searchFilter === 'name') {
    endPoint = `https://www.${url.name}.com/api/json/v1/1/search.php?s=${inputSearch}`;
  } else if (searchFilter === 'primeira' && inputSearch.length === 1) {
    endPoint = `https://www.${url.name}.com/api/json/v1/1/search.php?f=${inputSearch}`;
  } else {
    alert('Sua busca deve conter somente 1 (um) caracter');
  }

  try {
    const requestApi = await fetch(endPoint);
    const jsonApi = await requestApi.json();
    terminatedRequest = await jsonApi;
    tamanhoResposta = await jsonApi;
  } catch (error) {
    tamanhoResposta = undefined;
  }

  const retornoApi = {
    tamanhoResposta,
    terminatedRequest,
  }

  return retornoApi;
};

export default requestApi;
