import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ContextReceitas from '../context/ContextReceitas';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { buscarIngredientesComidas } from '../services/buscarIngredientes';

function ExplorarIngredientesComidas(props) {
  const [ingredientes, setIngredientes] = useState([]);
  const {
    setSearch,
    enviarTituloDaPagina,
    mudarStatusBotaoPesquisa,
    // tituloDaPagina,
  } = useContext(ContextReceitas);
  // const [setRedireciona] = useState(false);
  useEffect(() => {
    async function listaIngredientesAPI() {
      const ingredientesAPI = await buscarIngredientesComidas();
      setIngredientes(ingredientesAPI);
    }
    listaIngredientesAPI();
    enviarTituloDaPagina('Explorar Ingredientes Comidas');
    mudarStatusBotaoPesquisa(false);
  }, []);

  function handleRedireciona({ target: { alt } }) {
    console.log('olá');
    console.log(alt);
    const { history } = props;
    history.push('/comidas');
    setSearch({ type: 'i', search: alt });
  }

  // if (redireciona === true) return <Redirect to="/comida" />;

  return (
    <div>
      <Header />
      <div>
        {ingredientes.map((element, index) => (

          <Link
            type="button"
            key={ element.strIngredient }
            data-testid={ `${index}-ingredient-card` }
          >
            <img
              src={ `https://www.themealdb.com/images/ingredients/${element.strIngredient}-Small.png` }
              alt={ element.strIngredient }
              onClick={ handleRedireciona }
              value={ element.strIngredient }
              data-testid={ `${index}-card-img` }
            />
            <div data-testid={ `${index}-card-name` }>{element.strIngredient}</div>
          </Link>

        ))}
        ;
      </div>
      <Footer />
    </div>
  );
}

export default ExplorarIngredientesComidas;
