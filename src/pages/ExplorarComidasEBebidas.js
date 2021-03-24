import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { getComidasRandom, getBebidasRandom } from '../services/BuscaNasAPIs';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContextRecipes from '../context/ContextRecipes';

const ExplorarComidasEBebidadas = () => {
  const history = useHistory();
  const wordLength = -7;
  const Type = history.location.pathname.substr(wordLength);
  const [randomId, setRandomId] = useState('');

  useEffect(() => {
    async function getRandomId() {
      const Id = Type === 'bebidas' ? await getBebidasRandom() : await getComidasRandom();
      const ids = Type === 'bebidas' ? Id.drinks[0].idDrink : Id.meals[0].idMeal;
      setRandomId(ids);
    }
    getRandomId();
  }, [setRandomId, Type]);

  const { setHeaderInfo, setBarraBuscar } = useContext(ContextRecipes);

  function handleClickIngredientsBtn() {
    setHeaderInfo({ pageTitle: 'Explorar Ingredientes', showSearchIcon: false });
    setBarraBuscar({ input: '', radio: '' });
    return history.push(`${history.location.pathname}/ingredientes`);
  }

  function handleClickOriginBtn() {
    setHeaderInfo({ pageTitle: 'Explorar Origem', showSearchIcon: true });
    setBarraBuscar({ input: '', radio: '' });
    return history.push('/explorar/comidas/area');
  }

  return (
    <section className="w-100">
      <Header />
      <button
        type="button"
        onClick={ () => handleClickIngredientsBtn() }
        data-testid="explore-by-ingredient"
      >
        Por Ingredientes
      </button>
      {
        history.location.pathname.includes('comidas')
          ? (
            <button
              type="button"
              onClick={ () => handleClickOriginBtn() }
              data-testid="explore-by-area"
            >
              Por Local de Origem
            </button>
          )
          : ''
      }
      <button
        type="button"
        onClick={ () => history.push(`/${Type}/${randomId}`) }
        data-testid="explore-surprise"
      >
        Me Surpreenda!
      </button>
      <Footer />
    </section>
  );
};

export default ExplorarComidasEBebidadas;
