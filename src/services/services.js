const LISTA_INGREDIENTES_TAMANHO_MAXIMO = 15;

export const getIngredientes = (_detalhesDoIngrediente) => {
  // console.log(_detalhesDoIngrediente);
  const listaDeIngredientes = [];
  for (let i = 1; i <= LISTA_INGREDIENTES_TAMANHO_MAXIMO; i += 1) {
    if (_detalhesDoIngrediente[`strIngredient${i}`]) {
      listaDeIngredientes.push({
        ingredient: _detalhesDoIngrediente[`strIngredient${i}`],
        measure: _detalhesDoIngrediente[`strMeasure${i}`],
      });
    }
  }
  return listaDeIngredientes;
};

export const removerIngredienteDoArray = (
  ingrediente,
  arrayIngredientes,
) => arrayIngredientes.filter((item) => item !== ingrediente);

export const checkIngrediente = (ingrediente, tipoReceitaAtual, receitaItemId) => {
  const listaReceitas = JSON.parse(localStorage.getItem('inProgressRecipes'));
  if (listaReceitas) {
    if (listaReceitas[tipoReceitaAtual][receitaItemId].includes(ingrediente)) {
      const novoArrayIngredientes = removerIngredienteDoArray(
        ingrediente,
        listaReceitas[tipoReceitaAtual][receitaItemId],
      );
      listaReceitas[tipoReceitaAtual][receitaItemId] = novoArrayIngredientes;
      localStorage.setItem('inProgressRecipes', JSON.stringify(listaReceitas));
    } else {
      listaReceitas[tipoReceitaAtual][receitaItemId].push(ingrediente);
      localStorage.setItem('inProgressRecipes', JSON.stringify(listaReceitas));
    }
  } else {
    const novaListaReceita = {
      cocktails: {
      },
      meals: {
      },
    };
    novaListaReceita[tipoReceitaAtual][receitaItemId] = [ingrediente];
    localStorage.setItem('inProgressRecipes', JSON.stringify(novaListaReceita));
  }
};
