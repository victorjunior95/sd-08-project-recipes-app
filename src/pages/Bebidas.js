import React, { useContext } from 'react';
import DrinksList from '../components/DrinksList';
import Footer from '../components/Footer';
import HeaderWithSearch from '../components/HeaderWithSearch';
import Loading from '../components/Loading';
import Context from '../context/Context';

function Bebidas() {
  const { isLoading } = useContext(Context);
  return (
    <div>
      <HeaderWithSearch />
      {
        isLoading
          ? <Loading />
          : ''
      }
      <DrinksList />
      <Footer />
    </div>
  );
}

export default Bebidas;
