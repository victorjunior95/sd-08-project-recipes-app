import React, { useContext } from 'react';
import RecipesList from '../components/RecipesList';
import Footer from '../components/Footer';
import HeaderWithSearch from '../components/HeaderWithSearch';
import Context from '../context/Context';
import Loading from '../components/Loading';

function Comidas() {
  const { isLoading } = useContext(Context);
  return (
    <div>
      <HeaderWithSearch />
      {
        isLoading
          ? <Loading />
          : ''
      }
      <RecipesList />
      <Footer />
    </div>
  );
}

export default Comidas;
