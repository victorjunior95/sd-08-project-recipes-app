import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { getComidasRandom, getBebidasRandom } from '../services/BuscaNasAPIs';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContextRecipes from '../context/ContextRecipes';

const ExplorarComidasEBebidadas = () => {
  const { setHeaderInfo, setBarraBuscar } = useContext(ContextRecipes);
  const history = useHistory();
  const Type = history.location.pathname.includes('bebidas') ? 'bebidas' : 'comidas';
  const typeTitle = history.location.pathname.includes('bebidas') ? 'Bebidas' : 'Comidas';
  const [randomId, setRandomId] = useState('');

  useEffect(() => {
    async function getRandomId() {
      const Id = Type === 'bebidas' ? await getBebidasRandom() : await getComidasRandom();
      const ids = Type === 'bebidas' ? Id.drinks[0].idDrink : Id.meals[0].idMeal;
      setRandomId(ids);
    }
    getRandomId();
  }, [setRandomId, Type]);

  useEffect(() => {
    setHeaderInfo({ pageTitle: `Explorar ${typeTitle}`, showSearchIcon: false });
  }, [typeTitle, setHeaderInfo]);

  function handleClickIngredientsBtn() {
    setBarraBuscar({ input: '', radio: '' });
    return history.push(`${history.location.pathname}/ingredientes`);
  }

  function handleClickOriginBtn() {
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
