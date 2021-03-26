import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/footer/Footer';
import RecipesContext from '../../ContextApi/RecipesContext';

export default function Explorer() {
  const { setSearchParam, searchParam } = useContext(RecipesContext);

  function handleClick({ target: { name } }) {
    setSearchParam({
      ...searchParam,
      selectedParam: name,
    });
  }
  return (
    <div>
      <Header title="Explorar" search="false" />
      <Footer />
      <Link to="/explorar/comidas">
        <button
          type="button"
          data-testid="explore-food"
          name="meal"
          onClick={ handleClick }
        >
          Explorar Comidas
        </button>
      </Link>
      <Link to="/explorar/bebidas">
        <button
          type="button"
          data-testid="explore-drinks"
          name="cocktail"
          onClick={ handleClick }
        >
          Explorar Bebidas
        </button>
      </Link>
    </div>
  );
}
