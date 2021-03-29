import React, { useState, useContext, useEffect } from 'react';
import ContextReceitas from '../context/ContextReceitas';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { buscarIngredientesBebidas } from '../services/buscarIngredientes';

function ExplorarIngredientesBebidas() {
  const [ingredientes, setIngredientes] = useState([]);
  const { enviarTituloDaPagina, mudarStatusBotaoPesquisa } = useContext(
    ContextReceitas,
  );
  useEffect(() => {
    async function listaIngredientesAPI() {
      const ingredientesAPI = await buscarIngredientesBebidas();
      setIngredientes(ingredientesAPI);
    }
    listaIngredientesAPI();
    enviarTituloDaPagina('Explorar Ingredientes');
    mudarStatusBotaoPesquisa(false);
  }, []);

  return (
    <div>
      <Header />
      <div>
        {
          ingredientes.map(({ strIngredient1 }, index) => (
            <button
              type="button"
              key={ strIngredient1 }
              data-testid={ `${index}-ingredient-card` }
            >
              <img
                src={ `https://www.thecocktaildb.com/images/ingredients/${strIngredient1}-Small.png` }
                alt={ strIngredient1 }
                data-testid={ `${index}-card-img` }
              />
              <div data-testid={ `${index}-card-name` }>
                { strIngredient1 }
              </div>
            </button>
          ))
        }
        ;
      </div>
      <Footer />
    </div>
  );
}

export default ExplorarIngredientesBebidas;
